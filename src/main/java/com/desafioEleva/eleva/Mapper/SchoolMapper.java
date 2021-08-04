package com.desafioEleva.eleva.Mapper;

import com.desafioEleva.eleva.DTO.SchoolDTO;
import com.desafioEleva.eleva.Entity.Classroom;
import com.desafioEleva.eleva.Entity.School;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

@Mapper(componentModel = "spring")
public interface SchoolMapper {

    School toEntity(SchoolDTO schoolDTO);

    SchoolDTO toDTO(School school);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    School fromSchoolToSchool(School school, @MappingTarget School school1);


}
