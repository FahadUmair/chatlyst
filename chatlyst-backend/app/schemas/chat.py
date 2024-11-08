from pydantic import BaseModel

# Defining the request model for the chat endpoint, which specifies the data structure expected in requests.
class ChatRequest(BaseModel):
    message: str

# Defining the response model for the chat endpoint, specifying the structure of the API's response.
class ChatResponse(BaseModel):
    message: str