---
title: "Exercise Rep103: Three Transformations of a Representation"
topic: representation-theory
difficulty: intermediate
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.3, printed p. 321, PDF p. 333"
created: 2026-08-27
---

# Exercise Rep103: Three Transformations of a Representation

## Problem Statement

> [!question] Miscellaneous Exercise M.3
> Let $\rho$ be a representation of $G$. Decide whether $\rho'$ is a representation and whether it is necessarily isomorphic to $\rho$ when **(a)** $x\in G$ is fixed and $\rho'_g=\rho_{xgx^{-1}}$; **(b)** $\varphi$ is an automorphism of $G$ and $\rho'_g=\rho_{\varphi(g)}$; **(c)** $\sigma$ is one-dimensional and $\rho'_g=\sigma_g\rho_g$.

## Hints

> [!hint]- Hint 1
> Inner automorphisms give equivalent representations; outer automorphisms and twists need not.

## Solution

> [!success]- Solution
> In all three cases the defining rule respects multiplication, so $\rho'$ is a representation. In (a),
>
> $$
> \rho'_g=\rho_x\rho_g\rho_x^{-1},
> $$
>
> so $\rho'\cong\rho$. In (b), isomorphism need not hold: an automorphism of $C_n$ can send a character $\chi_k$ to a distinct $\chi_{ak}$. In (c), $\rho'=\sigma\otimes\rho$ and need not be isomorphic to $\rho$; for example twisting the trivial representation by a nontrivial linear character changes it. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]

## Notes

- **Source status:** [S1, Ch. 10, Misc. Ex. M.3, printed p. 321, PDF p. 333].

