package com.desafioEleva.eleva.Mapper;

import com.desafioEleva.eleva.DTO.SchoolDTO;
import com.desafioEleva.eleva.Entity.School;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SchoolMapper {

    School toEntity(SchoolDTO schoolDTO);

    SchoolDTO toDTO(School school);

}
