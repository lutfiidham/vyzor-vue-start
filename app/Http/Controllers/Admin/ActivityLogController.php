<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Activitylog\Models\Activity;

class ActivityLogController extends Controller
{
    public function index(Request $request)
    {
        $query = Activity::with(['causer' => function($query) {
            $query->select('id', 'name', 'email');
        }])->latest();

        // Search
        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('description', 'like', "%{$request->search}%")
                  ->orWhere('subject_type', 'like', "%{$request->search}%");
            });
        }

        // Filter by action
        if ($request->action) {
            $query->where('description', $request->action);
        }

        // Filter by user
        if ($request->user) {
            $query->where('causer_id', $request->user);
        }

        // Filter by date
        if ($request->date) {
            $query->whereDate('created_at', $request->date);
        }

        $activities = $query->paginate(20);

        // Transform activities to include properties
        $activitiesData = $activities->map(function ($activity) {
            return [
                'id' => $activity->id,
                'description' => $activity->description,
                'subject_type' => $activity->subject_type,
                'subject_id' => $activity->subject_id,
                'causer' => $activity->causer,
                'properties' => $activity->properties,
                'created_at' => $activity->created_at,
                'ip_address' => $activity->properties['ip'] ?? null,
                'user_agent' => $activity->properties['user_agent'] ?? null,
            ];
        });

        $users = User::select('id', 'name')->get();

        return Inertia::render('Admin/ActivityLogs/Index', [
            'activities' => $activitiesData,
            'users' => $users,
            'pagination' => [
                'current_page' => $activities->currentPage(),
                'last_page' => $activities->lastPage(),
                'from' => $activities->firstItem(),
                'to' => $activities->lastItem(),
                'total' => $activities->total(),
                'prev_page_url' => $activities->previousPageUrl(),
                'next_page_url' => $activities->nextPageUrl(),
            ]
        ]);
    }

    public function export(Request $request)
    {
        // Export functionality
        // Can be implemented with Laravel Excel or similar
        return response()->json(['message' => 'Export functionality coming soon']);
    }
}
