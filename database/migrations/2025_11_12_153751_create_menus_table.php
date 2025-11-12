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
        Schema::create('menus', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->string('title', 100);
            $table->text('icon')->nullable();
            $table->string('path', 255)->nullable();
            $table->enum('type', ['menutitle', 'link', 'sub']);
            $table->string('badge_text', 50)->nullable();
            $table->string('badge_color', 50)->nullable();
            $table->integer('order')->default(0);
            $table->boolean('is_active')->default(true);
            $table->enum('target', ['_self', '_blank'])->nullable();
            $table->text('description')->nullable();
            $table->timestamps();

            // Indexes
            $table->index('parent_id');
            $table->index('order');
            $table->index('is_active');
            $table->index('type');

            // Foreign key
            $table->foreign('parent_id')->references('id')->on('menus')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menus');
    }
};
