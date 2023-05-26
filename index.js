import os
import subprocess

def initialize_repository():
    subprocess.run(['git', 'init'])

def add_files(files):
    subprocess.run(['git', 'add'] + files)

def commit_changes(message):
    subprocess.run(['git', 'commit', '-m', message])

def create_branch(branch_name):
    subprocess.run(['git', 'branch', branch_name])

def switch_branch(branch_name):
    subprocess.run(['git', 'checkout', branch_name])

def merge_branch(branch_name):
    subprocess.run(['git', 'merge', branch_name])

def clone_repository(remote_url):
    subprocess.run(['git', 'clone', remote_url])

def push_changes(remote_name, branch_name):
    subprocess.run(['git', 'push', remote_name, branch_name])

def pull_changes(remote_name, branch_name):
    subprocess.run(['git', 'pull', remote_name, branch_name])

def display_status():
    subprocess.run(['git', 'status'])

def main():
    while True:
        print("1. Initialize repository")
        print("2. Add files")
        print("3. Commit changes")
        print("4. Create branch")
        print("5. Switch branch")
        print("6. Merge branch")
        print("7. Clone repository")
        print("8. Push changes")
        print("9. Pull changes")
        print("10. Display status")
        print("11. Quit")
        
        choice = int(input("Enter your choice: "))
        
        if choice == 1:
            initialize_repository()
        elif choice == 2:
            files = input("Enter file paths separated by spaces: ").split()
            add_files(files)
        elif choice == 3:
            message = input("Enter commit message: ")
            commit_changes(message)
        elif choice == 4:
            branch_name = input("Enter branch name: ")
            create_branch(branch_name)
        elif choice == 5:
            branch_name = input("Enter branch name: ")
            switch_branch(branch_name)
        elif choice == 6:
            branch_name = input("Enter branch name: ")
            merge_branch(branch_name)
        elif choice == 7:
            remote_url = input("Enter remote repository URL: ")
            clone_repository(remote_url)
        elif choice == 8:
            remote_name = input("Enter remote name: ")
            branch_name = input("Enter branch name: ")
            push_changes(remote_name, branch_name)
        elif choice == 9:
            remote_name = input("Enter remote name: ")
            branch_name = input("Enter branch name: ")
            pull_changes(remote_name, branch_name)
        elif choice == 10:
            display_status()
        elif choice == 11:
            break
        else:
            print("Invalid choice. Please try again.")

if __name__ == "__main__":
    main()
