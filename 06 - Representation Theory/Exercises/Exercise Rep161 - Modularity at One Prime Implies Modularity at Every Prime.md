---
title: "Exercise Rep161: Modularity at One Prime Implies Modularity at Every Prime"
topic: representation-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 9, Section 9.6, Exercise 9.6.2, printed p. 409, PDF p. 421"
source_refs:
  - "S7/ch-9/sec-6/ex-2"
created: 2026-10-28
---

# Exercise Rep161: Modularity at One Prime Implies Modularity at Every Prime

## Problem Statement

> [!question] Original Exercise 9.6.2
> The proof of Proposition 9.6.4 need not proceed via Version $a_p$ of Modularity and Carayol's work. If $\rho_{E,\ell}$ is modular for some $\ell$, there is a newform $f\in S_2(\Gamma_0(M_f))$ with $K_{f,\lambda}=\mathbb Q_\ell$ and $\rho_{f,\lambda}\sim\rho_{E,\ell}$. Explain why $a_p(f)=a_p(E)$ for almost all $p$. As explained in Section 8.8, Strong Multiplicity One shows $K_f=\mathbb Q$, so $\rho_{f,\ell}:G_{\mathbb Q}\to\mathrm{GL}_2(\mathbb Q_\ell)$ exists for every $\ell$. Use Exercise 9.6.1 to show $\rho_{f,\ell}\sim\rho_{E,\ell}$, so modularity holds for all $\ell$.

## Hints

> [!hint]- Hint 1
> Compare good-prime traces of the initially equivalent representations.

> [!hint]- Hint 2
> Use Strong Multiplicity One on the conjugate newforms, then Chebotarev and the explicit trace-comparison lemma at every new prime.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> At every prime outside the finite set dividing $\ell NM_f$, the two equivalent representations are unramified and have respective characteristic polynomials $X^2-a_p(f)X+p$ and $X^2-a_p(E)X+p$. Equality of traces gives $a_p(f)=a_p(E)$ in $K_{f,\lambda}$; its field embedding is injective, so this is equality of the algebraic number $a_p(f)$ with the rational integer $a_p(E)$.
>
> For every embedding $\sigma:K_f\hookrightarrow\mathbb C$, the conjugate newform $f^\sigma$ has the same almost-all-prime eigenvalues as $f$, since those are the integers just found. Strong Multiplicity One therefore gives $f^\sigma=f$. Every Fourier coefficient is fixed by every embedding, hence rational, so $K_f=\mathbb Q$.
>
> Fix any other prime $\ell'$. The representations $\rho_{f,\ell'}$ and $\rho_{E,\ell'}$ have the same characteristic polynomials at all primes outside a finite set. Their trace and determinant functions are continuous and conjugacy invariant. Chebotarev density extends the equalities to every element of $G_{\mathbb Q}$. The elliptic representation is irreducible by Theorem 9.4.1 and odd because its determinant is the cyclotomic character, which sends complex conjugation to $-1$. Apply Exercise 9.6.1 with the elliptic representation as its irreducible first argument. It gives equivalence at $\ell'$. Since $\ell'$ was arbitrary, modularity holds at every prime.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[07 - Modular Forms/Concepts/Hecke Operators|Hecke Operators]]
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Elliptic Curves and Modularity]]

## Notes

- **Source status:** The complete numbered exercise and every original subpart were checked on the original 200 dpi page images at the printed/PDF anchors in the source field.
- **Imported deep inputs:** Strong Multiplicity One, existence and good-prime polynomials of modular representations, Chebotarev density, and irreducibility of the elliptic Tate representation from Theorem 9.4.1. Their proofs are outside this exercise; only the implication between modularity statements is derived.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
