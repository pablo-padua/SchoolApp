package com.desafioEleva.eleva.Service;

import com.desafioEleva.eleva.DTO.ClassroomDTO;
import com.desafioEleva.eleva.Entity.Classroom;
import org.springframework.context.annotation.Profile;

import java.util.List;

@Profile("!test")
public interface ClassroomService {

    Classroom addClassroom(ClassroomDTO classroomDTO);

    List<Classroom> getClassroomList();

}
