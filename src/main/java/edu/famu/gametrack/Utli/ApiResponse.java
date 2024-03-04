package edu.famu.gametrack.Utli;

public record ApiResponse(boolean success, String message, Object data, Object error) {}
