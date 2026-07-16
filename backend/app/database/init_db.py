print("🚀 init_db.py started")

from sqlalchemy import text

from app.database.database import engine


def test_database_connection():
    print("Inside test_database_connection()")

    try:
        with engine.connect() as connection:
            result = connection.execute(text("SELECT version();"))

            print("\n====================================")
            print("✅ Database Connection Successful")
            print("====================================")
            print(result.scalar())

    except Exception as ex:
        print("\n====================================")
        print("❌ Database Connection Failed")
        print("====================================")
        print(ex)


if __name__ == "__main__":
    print("Running as main...")
    test_database_connection()
