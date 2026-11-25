---
title: "Exercise Rep171: Lie Group Isomorphisms Induce Lie Algebra Isomorphisms"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-groups
  - lie-algebras
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 8, printed p. 74, PDF p. 86"
source_refs:
  - "S10/ch-3/sec-9/ex-8"
created: 2026-11-25
---

# Exercise Rep171: Lie Group Isomorphisms Induce Lie Algebra Isomorphisms

## Problem Statement

> [!question] Original Chapter 3, Exercise 8
> Show that two isomorphic matrix Lie groups have isomorphic Lie algebras.

## Hints

> [!hint]- Hint 1
> Apply the homomorphism theorem to a Lie group isomorphism and its inverse.

> [!hint]- Hint 2
> Apply both group maps successively to $e^{tX}$ for every real $t$. Recover the generator by differentiating at $t=0$.

## Solution

> [!success]- Solution
> Let $\Phi:G\to H$ be a Lie group isomorphism, so both $\Phi$ and $\Phi^{-1}$ are continuous group homomorphisms by Definition 1.18 [S10, printed p. 22, PDF p. 34]. Write $\mathfrak g=\operatorname{Lie}(G)$ and $\mathfrak h=\operatorname{Lie}(H)$. Theorem 3.28 gives real-linear, bracket-preserving maps $\phi:\mathfrak g\to\mathfrak h$ and $\psi:\mathfrak h\to\mathfrak g$ associated to $\Phi$ and $\Phi^{-1}$, respectively [S10, printed pp. 60–62, PDF pp. 72–74]. In particular,
> $$
> \Phi(e^{tX})=e^{t\phi(X)},\qquad
> \Phi^{-1}(e^{tY})=e^{t\psi(Y)}
> $$
> for all $X\in\mathfrak g$, $Y\in\mathfrak h$, and $t\in\mathbb R$.
>
> For fixed $X$, apply $\Phi^{-1}$ to $\Phi(e^{tX})=e^{t\phi(X)}$ to obtain
> $$
> e^{tX}=e^{t\psi(\phi(X))}\quad\text{for every }t\in\mathbb R.
> $$
> The coefficient of $t$ in the matrix exponential at zero gives $X=\psi(\phi(X))$. Likewise $\Phi(\Phi^{-1}(e^{tY}))=e^{tY}$ yields $Y=\phi(\psi(Y))$. Thus $\phi$ and $\psi$ are inverse Lie algebra homomorphisms, so $\mathfrak g\cong\mathfrak h$.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status.** The full original statement was checked at 200 dpi on printed p. 74 / PDF p. 86. The inverse-map argument is an independent application of Theorem 3.28. Hall also proves the general composition law in Proposition 3.30 [S10, printed p. 63, PDF p. 75].
- **Hypothesis.** Hall uses isomorphism in the category of matrix Lie groups. The proof uses continuity in both directions through Theorem 3.28.
- **Concrete check.** For a fixed invertible matrix $P$ and $H=PGP^{-1}$, $\Phi(A)=PAP^{-1}$ has associated map $X\mapsto PXP^{-1}$, since $Pe^{tX}P^{-1}=e^{tPXP^{-1}}$. The map associated to $\Phi^{-1}$ conjugates by $P^{-1}$.
- **Archive navigation.** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].

