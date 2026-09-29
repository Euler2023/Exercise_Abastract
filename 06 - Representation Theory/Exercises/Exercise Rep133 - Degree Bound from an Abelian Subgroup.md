---
title: "Exercise Rep133: Degree Bound from an Abelian Subgroup"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - degree-bounds
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XVIII, Exercise 9, printed p. 724, PDF p. 739"
created: 2026-09-29
---

# Exercise Rep133: Degree Bound from an Abelian Subgroup

## Problem Statement

> [!question] Lang XVIII.9
> Let $A$ be a commutative subgroup of a finite group $G$. Show that every irreducible representation of $G$ over $\mathbb C$ has dimension $\le(G:A)$.

## Hints

> [!hint]- Hint 1: Find a line invariant under the subgroup
> The operators for elements of $A$ commute and have finite order. Diagonalize them simultaneously to obtain a common eigenvector.

> [!hint]- Hint 2: Generate from the line
> If $v$ spans that line, the span of $Gv$ is a nonzero invariant subspace. One vector $tv$ for each left coset $tA$ already spans it.

## Solution

> [!success]- Independent derivation by a cyclic vector
> Let $V\ne0$ carry an irreducible complex representation $\rho$ of $G$. Each $\rho(a)$, for $a\in A$, is diagonalizable: if $a$ has order $m$, then its minimal polynomial divides $X^m-1$, which has distinct roots over $\mathbb C$.
>
> Since $A$ is abelian, these operators commute. They have a common eigenvector $v\ne0$. Indeed, decompose into the eigenspaces of one operator; all the others preserve those spaces, and repeated decomposition gives a common eigenbasis. Their restrictions remain diagonalizable because their minimal polynomials still divide polynomials with distinct roots. The finite set $A$ makes this a finite procedure.
>
> Write $\rho(a)v=\lambda(a)v$. The group law implies
> $$
> \lambda(ab)=\lambda(a)\lambda(b),\qquad\lambda(1)=1,
> $$
> so $\lambda:A\to\mathbb C^\times$ is a linear character. Let $t_1,\ldots,t_s$ represent the left cosets of $A$, where $s=[G:A]$. For $g=t_i a$,
> $$
> \rho(g)v=\lambda(a)\rho(t_i)v.
> $$
> Consequently
> $$
> W=\operatorname{span}_{\mathbb C}\{\rho(g)v:g\in G\}
> =\operatorname{span}_{\mathbb C}\{\rho(t_i)v:1\le i\le s\}.
> $$
> The first description shows that $W$ is $G$-stable, and it contains $v\ne0$. Irreducibility forces $W=V$. The second description now gives $\dim_{\mathbb C}V\le s=[G:A]$, as required.
>
> Equivalently, the map $\mathbb C[G]\otimes_{\mathbb C[A]}\mathbb C_\lambda\to V$, $g\otimes1\mapsto\rho(g)v$, is a well-defined surjection from a space of dimension $[G:A]$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory]]
- [[06 - Representation Theory/Concepts/Isotypic Components and Clifford Theory|Weight spaces and isotypic components]]
- [[06 - Representation Theory/Concepts/Induced Representations and Frobenius Reciprocity|Induced representations]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- **Source and proof status:** The full statement and the weak inequality were checked on the original image at [S2, Ch. XVIII, Exercise 9, printed p. 724, PDF p. 739]. The solution is an independent derivation.
- **Sharpness:** The two-dimensional standard representation of $S_3$ attains the bound for $A=A_3$, which has index $2$. If $G=A$ is abelian, the same proof shows every complex irreducible has dimension $1$.
- **Hypotheses:** Normality of $A$ is not required. The proof uses a one-dimensional constituent of the restricted representation, available here because the coefficient field is $\mathbb C$. Such a constituent need not exist over a nonsplitting field.
