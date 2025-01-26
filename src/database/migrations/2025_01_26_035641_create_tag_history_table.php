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
        Schema::create('tag_history', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('tag_id');
            $table->timestamps();
            $table->string('label');
            $table->enum('type', ['Discipline','Media','Style']);
            $table->enum('action', ['Created','Updated','Requested', 'Approved', 'Denied', 'Retired']);
            $table->string('action_note');
            $table->unsignedBigInteger('actor');
            $table->foreign('tag_id')->references('id')->on('tags'); 
            $table->foreign('actor')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tag_history');
    }
};
