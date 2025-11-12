<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('menu_role', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('menu_id');
            $table->unsignedBigInteger('role_id');
            $table->timestamps();

            // Indexes
            $table->index('menu_id');
            $table->index('role_id');

            // Unique constraint
            $table->unique(['menu_id', 'role_id']);

            // Foreign keys
            $table->foreign('menu_id')->references('id')->on('menus')->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_role');
    }
};