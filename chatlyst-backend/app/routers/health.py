from fastapi import APIRouter

router = APIRouter()

# Defining a GET endpoint at "/api/health" to check the health status of the application.
@router.get("/api/health")
def health_check():
    return {"status": "OK"}