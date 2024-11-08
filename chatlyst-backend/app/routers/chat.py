from fastapi import APIRouter
from app.schemas.chat import ChatRequest, ChatResponse
from app.crud.chat import get_response

router = APIRouter()

# Defining a POST endpoint at "/api/chat" that accepts a ChatRequest and returns a ChatResponse model.
@router.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    response_text = get_response(request.message)
    return {"message": response_text}