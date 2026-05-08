from langchain_community.chat_models import ChatOllama
from prompts.email_prompt import EMAIL_PROMPT

model = ChatOllama(model="phi3",temperature=0)
def generate_email(
    professor_name,
    subject,
    student_name,
    issue,
    tone
):
    try:
        prompt = EMAIL_PROMPT.format(
            professor_name=professor_name,
            subject=subject,
            student_name=student_name,
            issue=issue,
            tone=tone
        )

        response = model.invoke(prompt)

        return response.content

    except Exception as e:
        print("Ollama Error:", str(e))
        return "Error: AI model failed. Please restart Ollama."