package com.desafioEleva.eleva.Mapper;

import com.desafioEleva.eleva.DTO.ClassroomDTO;
import com.desafioEleva.eleva.Entity.Classroom;
import com.desafioEleva.eleva.Repository.SchoolRepository;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring", uses = {MappingUtil.class, SchoolRepository.class})
public interface ClassroomMapper {

    @Mapping(source = "school", target = "school.schoolCode", qualifiedByName = {"GetSchoolObject"})
    Classroom toEntity(ClassroomDTO classroomDTO);

    @Mapping(source="school.schoolCode", target = "school")
    ClassroomDTO toDTO(Classroom classroom);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Classroom fromClassToClass(Classroom classroom, @MappingTarget Classroom Classroom1);

}
