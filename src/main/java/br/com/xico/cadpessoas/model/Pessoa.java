package br.com.xico.cadpessoas.model;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * @author Xico
 */
@Entity
@Table(name = "pessoas")
public class Pessoa implements Serializable {

	private static final long serialVersionUID = 8128389568127787766L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String nome;
	private String email;
	private String genero;
	private String telefone;

	@Column(nullable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate dataNascimento;

	// Constructors
	public Pessoa() {}

	public Pessoa(String nome, String email, String genero, String telefone, LocalDate dataNascimento) {
		this.nome = nome;
		this.email = email;
		this.genero = genero;
		this.telefone = telefone;
		this.dataNascimento = dataNascimento;
	}

	public Pessoa(Long id, String nome, String email, String genero, String telefone, LocalDate dataNascimento) {
		this.id = id;
		this.nome = nome;
		this.email = email;
		this.genero = genero;
		this.telefone = telefone;
		this.dataNascimento = dataNascimento;
	}

	// Getters and Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public LocalDate getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(LocalDate dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	// toString, equals, hashCode
	@Override
	public String toString() {
		return "Pessoa{" +
				"id=" + id +
				", nome='" + nome + '\'' +
				", email='" + email + '\'' +
				", genero='" + genero + '\'' +
				", telefone='" + telefone + '\'' +
				", dataNascimento=" + dataNascimento +
				'}';
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Pessoa pessoa = (Pessoa) o;
		return id != null && id.equals(pessoa.id);
	}

	@Override
	public int hashCode() {
		return id != null ? id.hashCode() : 0;
	}
}
