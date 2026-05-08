from fastapi import FastAPI
from pydantic import BaseModel
from services.generator import generate_email
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class EmailRequest(BaseModel):
    professor_name: str
    subject: str
    student_name: str
    issue: str
    tone: str


@app.post("/generate")
def generate_email_route(data: EmailRequest):

    email = generate_email(
        professor_name=data.professor_name,
        subject=data.subject,
        student_name=data.student_name,
        issue=data.issue,
        tone=data.tone
    )

    return {
        "email": email
    }