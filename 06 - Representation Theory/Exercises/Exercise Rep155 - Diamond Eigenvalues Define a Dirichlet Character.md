---
title: "Exercise Rep155: Diamond Eigenvalues Define a Dirichlet Character"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.8, Exercise 5.8.1, printed p. 200, PDF p. 214"
source_refs:
  - "S7/ch-5/sec-8/ex-1"
created: 2026-10-28
---

# Exercise Rep155: Diamond Eigenvalues Define a Dirichlet Character

## Problem Statement

> [!question] Original Exercise 5.8.1
> Show that if $f$ is an eigenform for the operators $\langle n\rangle$ with eigenvalues $d_n$, then the map $n\mapsto d_n$ defines a Dirichlet character $\chi:(\mathbb Z/N\mathbb Z)^*\longrightarrow\mathbb C^*$.

## Hints

> [!hint]- Hint 1
> Diamond operators depend only on the residue class and satisfy $\langle mn\rangle=\langle m\rangle\langle n\rangle$.

> [!hint]- Hint 2
> For a unit $n$, the operator $\langle n\rangle$ is invertible. Use $f\ne0$ to compare scalars.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> The hypothesis that $f$ is an eigenform includes $f\ne0$. On units modulo $N$, diamond operators satisfy $\langle1\rangle=I$, depend only on the residue class, and obey $\langle mn\rangle=\langle m\rangle\langle n\rangle$; these follow by multiplying representatives in $\Gamma_0(N)/\Gamma_1(N)\simeq(\mathbb Z/N\mathbb Z)^*$.
>
> Thus $d_1f=f$, so $d_1=1$. If $m\equiv n\pmod N$, then $d_mf=d_nf$ and hence $d_m=d_n$. Also
> $$
> d_{mn}f=\langle mn\rangle f=\langle m\rangle\langle n\rangle f=d_md_nf,
> $$
> so $d_{mn}=d_md_n$. For each unit $n$, choose $u$ with $nu\equiv1\pmod N$. Then $d_nd_u=d_1=1$, proving $d_n\ne0$. Therefore $\chi(\bar n)=d_n$ is a well-defined group homomorphism to $\mathbb C^*$, as asserted. Since the domain is finite, its values are roots of unity. Extending it by $\chi(n)=0$ when $(n,N)>1$ gives the usual Dirichlet character on integers and agrees with the convention that the corresponding diamond operators are zero.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory]]
- [[01 - Group Theory/Concepts/Group Actions]]
- [[07 - Modular Forms/Concepts/Hecke Operators]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.8.1, printed p. 200 / PDF p. 214]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
