package com.example.oneNine.service.todo;

import com.example.oneNine.domain.todo.Todo;
import com.example.oneNine.dto.todo.request.TodoCreateRequest;
import com.example.oneNine.dto.todo.request.TodoUpdateRequest;
import com.example.oneNine.dto.todo.response.TodoResponse;
import com.example.oneNine.repository.todo.TodoRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoService {
    private final TodoRepository todoRepository;

    TodoService(TodoRepository todoRepository) {
        this.todoRepository = todoRepository;
    }

    @Transactional
    public void createProduct(TodoCreateRequest request) {
        todoRepository.save(new Todo(request.getTodoDate(),
                                     request.getTodoName(),
                                     request.isToggle()));
    }

    @Transactional
    public List<TodoResponse> getTodo() {
        List<Todo> todoList = todoRepository.findAll();
        return todoList.stream()
                .map(todo -> new TodoResponse(todo.getTodoId(),
                                              todo.getTodoDate(),
                                              todo.getTodoName(),
                                              todo.isTodoToggle()))
                .collect(Collectors.toList());
    }

    public void updateTodoName(TodoUpdateRequest request) {
        Todo todo = todoRepository.findById(request.getTodoId())
                .orElseThrow(IllegalAccessError::new);
        todoRepository.save(todo);
    }

    public void updateTodoDate(TodoUpdateRequest request) {
        Todo todo = todoRepository.findBytodoName(request.getTodoName());
        todoRepository.save(todo);
    }

    public void updateTodoToggle(TodoUpdateRequest request) {
        Todo todo = todoRepository.findBytodoName(request.getTodoName());
        todoRepository.save(new Todo(request.getTodoDate(),
                                     request.getTodoName(),
                                     !request.isTodoToggle()));
    }

    @Transactional
    public void deleteTodo(String todoName) {
        Todo todo = todoRepository.findBytodoName(todoName);
        todoRepository.delete(todo);
    }
}
