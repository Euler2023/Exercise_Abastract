---
title: "Exercise Rep87: Character Theory of PSL2 over F7"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 6, Ex. 6.11, printed p. 319, PDF p. 331"
created: 2026-08-27
---

# Exercise Rep87: Character Theory of PSL2 over F7

## Problem Statement

> [!question] Exercise 6.11
> The character table for $G=PSL_2(\mathbb F_7)$ is below, with $\gamma=\frac12(-1+\sqrt7i)$ and $\gamma'=\frac12(-1-\sqrt7i)$.
>
> | | (1) | (21) | (24) | (24) | (42) | (56) |
> |---|---:|---:|---:|---:|---:|---:|
> | | $1$ | $a$ | $b$ | $c$ | $d$ | $e$ |
> | $\chi_1$ | 1 | 1 | 1 | 1 | 1 | 1 |
> | $\chi_2$ | 3 | -1 | $\gamma$ | $\gamma'$ | 1 | 0 |
> | $\chi_3$ | 3 | -1 | $\gamma'$ | $\gamma$ | 1 | 0 |
> | $\chi_4$ | 6 | 2 | -1 | -1 | 0 | 0 |
> | $\chi_5$ | 7 | -1 | 0 | 0 | -1 | 1 |
> | $\chi_6$ | 8 | 0 | 1 | 1 | 0 | -1 |
>
> **(a)** Use it to give two proofs that this group is simple.
>
> **(b)** Identify, so far as possible, columns that correspond to the conjugacy classes of the elements
>
> $$
> \begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad
> \begin{pmatrix}2&0\\0&4\end{pmatrix},
> $$
>
> and find matrices that represent the remaining conjugacy classes.
>
> **(c)** $G$ operates on the set of eight one-dimensional subspaces of $\mathbb F_7^2$. Decompose the associated character into irreducible characters.

## Hints

> [!hint]- Hint 1
> The class sizes are $1,21,24,24,42,56$ and the element orders are $1,2,7,7,4,3$.

## Solution

> [!success]- Solution
> **(a)** No proper union of the nonidentity classes, together with $1$, has size dividing $168$; hence there is no proper nontrivial normal subgroup. Alternatively, the kernel columns of every nontrivial irreducible character contain only the identity, so a proper quotient cannot have a nontrivial irreducible character.
>
> **(b)** The unipotent matrix has order $7$ in $PSL_2(\mathbb F_7)$, so it lies in one of the two size-$24$ columns $b,c$; its inverse lies in the other when the classes differ. The diagonal matrix has order $3$, hence lies in the size-$56$ column $e$. Representatives for the size-$21$ and size-$42$ columns may be chosen as
>
> $$
> \begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad
> \begin{pmatrix}1&1\\1&2\end{pmatrix},
> $$
>
> of projective orders $2$ and $4$ respectively.
>
> **(c)** Fixed-line counting gives the permutation character $(8,0,1,1,0,2)$. Comparing with the source table yields
>
> $$
> \mathbb C[\mathbb P^1(\mathbb F_7)]=\chi_1\oplus\chi_5,
> $$
>
> where $\chi_5$ has degree $7$. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]

## Notes

- The full source table and matrices were visually checked at [S1, Ch. 10, §6, Ex. 6.11, printed p. 319, PDF p. 331].
