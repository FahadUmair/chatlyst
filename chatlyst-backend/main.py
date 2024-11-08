from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from app.routers import health, chat

# Initializing the main FastAPI application instance.
app = FastAPI()

# Allow all localhost origins (any port on localhost)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost", "http://localhost:3000", "http://localhost:8000", "http://localhost:4200",  # etc.
        "http://127.0.0.1", "http://127.0.0.1:3000", "http://127.0.0.1:8000", "http://127.0.0.1:4200",  # etc.
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers for different endpoints
app.include_router(health.router)
app.include_router(chat.router)

# Custom exception handler for 404 errors to return a user-friendly JSON response.
@app.exception_handler(404)
async def custom_404_handler(request: Request, exc: Exception):
    return JSONResponse(
        status_code=404,
        content={"message": "This page doesn't exist"}
    )