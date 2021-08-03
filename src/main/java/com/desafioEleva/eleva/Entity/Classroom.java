package com.desafioEleva.eleva.Entity;

import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "CLASSROOM")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Classroom {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "CLASS_CODE", unique = true, nullable = false)
    @NotNull

    private Long classCode;

    @Column(name = "TERM", nullable = false)
    @NotNull
    private Long term;

    @Column(name = "PROFESSOR", nullable = false)
    @NotNull
    private String professor;

    @Column(name = "PROGRAM", nullable = false)
    @NotNull
    private String program;

    @Column(name = "CLASS_COORDINATOR", nullable = false)
    @NotNull
    private String classCoordinator;

    @Column(name = "TUITION_FEE", nullable = false)
    @NotNull
    private Double tuitionFee;

    @Column(name = "EMAIL", nullable = false)
    @NotNull
    private String email;

    @Column(name = "ENTRANCE_MINIMUM_GRADE")
    @NotNull
    private Double entranceMinGrade;

    @Column(name = "BREAK_TIME", nullable = false)
    @NotNull
    private Double breakTime;

    @Column(name = "CITY_NAME", nullable = false)
    @NotNull
    private String cityName;

    @Column(name = "GRAD_YEAR", nullable = false)
    @NotNull
    private Long gradYear;

    @Column(name = "ENTRANCE_YEAR", nullable = false)
    @NotNull
    private Long entranceYear;

    @Column(name = "STUDENTS_COUNT", nullable = false)
    @NotNull
    private Long studentsCount;

    @Column(name = "AVAILABLE_SEATS", nullable = false)
    private Long availableSeats;

    @ManyToOne
    @JoinColumn(name = "SCHOOL")
    private School school;

}
