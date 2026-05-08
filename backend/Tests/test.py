from langchain_community.chat_models import ChatOllama

llm = ChatOllama(
    model="phi3",
    temperature=0.3
)

response = llm.invoke(
    "Write a professional email to a professor requesting assignment extension."
)

print(response.content)