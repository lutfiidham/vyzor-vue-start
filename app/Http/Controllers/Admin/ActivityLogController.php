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
        $query = Activity::with('causer')->latest();

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

        $users = User::select('id', 'name')->get();

        return Inertia::render('Admin/ActivityLogs/Index', [
            'activities' => $activities,
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
