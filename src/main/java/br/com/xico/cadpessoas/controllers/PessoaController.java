package br.com.xico.cadpessoas.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.xico.cadpessoas.model.Pessoa;
import br.com.xico.cadpessoas.repositories.PessoaRepository;

@RestController
@RequestMapping("/api/pessoas")
public class PessoaController {
	
	@Autowired
	private PessoaRepository pessoaRepo;

	public PessoaController(PessoaRepository pessoaRepo) {
		this.pessoaRepo = pessoaRepo;
	}

	@GetMapping
	public ResponseEntity<List<Pessoa>> listarTodasPessoas() {
		List<Pessoa> pessoas = pessoaRepo.findAll();
		return ResponseEntity.ok(pessoas);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Pessoa> buscarPessoaPorId(@PathVariable Long id) {
		Optional<Pessoa> pessoa = pessoaRepo.findById(id);
		return pessoa.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public ResponseEntity<Pessoa> criarPessoa(@RequestBody Pessoa pessoa) {
		try {
			Pessoa novaPessoa = pessoaRepo.save(pessoa);
			return ResponseEntity.status(HttpStatus.CREATED).body(novaPessoa);
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Pessoa> atualizarPessoa(@PathVariable Long id, @RequestBody Pessoa pessoaAtualizada) {
		Optional<Pessoa> pessoaExistente = pessoaRepo.findById(id);
		
		if (pessoaExistente.isPresent()) {
			pessoaAtualizada.setId(id);
			Pessoa pessoaSalva = pessoaRepo.save(pessoaAtualizada);
			return ResponseEntity.ok(pessoaSalva);
		} else {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> removerPessoa(@PathVariable Long id) {
		Optional<Pessoa> pessoa = pessoaRepo.findById(id);
		
		if (pessoa.isPresent()) {
			pessoaRepo.deleteById(id);
			return ResponseEntity.noContent().build();
		} else {
			return ResponseEntity.notFound().build();
		}
	}
}
