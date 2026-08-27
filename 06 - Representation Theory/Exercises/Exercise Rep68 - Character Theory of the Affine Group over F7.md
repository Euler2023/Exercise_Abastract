---
title: "Exercise Rep68: Character Theory of the Affine Group over F7"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 4, Ex. 4.11, printed p. 317, PDF p. 329"
created: 2026-08-27
---

# Exercise Rep68: Character Theory of the Affine Group over F7

## Problem Statement

> [!question] Exercise 4.11
> In the character table below, $\omega=e^{2\pi i/3}$.
>
> | | (1) | (6) | (7) | (7) | (7) | (7) | (7) |
> |---|---:|---:|---:|---:|---:|---:|---:|
> | | $1$ | $a$ | $b$ | $c$ | $d$ | $e$ | $f$ |
> | $\chi_1$ | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
> | $\chi_2$ | 1 | 1 | 1 | $\omega$ | $\overline\omega$ | $\omega$ | $\overline\omega$ |
> | $\chi_3$ | 1 | 1 | 1 | $\overline\omega$ | $\omega$ | $\overline\omega$ | $\omega$ |
> | $\chi_4$ | 1 | 1 | -1 | $-\omega$ | $-\overline\omega$ | $\omega$ | $\overline\omega$ |
> | $\chi_5$ | 1 | 1 | -1 | $-\overline\omega$ | $-\omega$ | $\overline\omega$ | $\omega$ |
> | $\chi_6$ | 1 | 1 | -1 | -1 | -1 | 1 | 1 |
> | $\chi_7$ | 6 | -1 | 0 | 0 | 0 | 0 | 0 |
>
> **(a)** Show that $G$ has a normal subgroup $N$ isomorphic to $D_7$.
>
> **(b)** Decompose the restrictions of each character to $N$ into irreducible $N$-characters.
>
> **(c)** Determine the numbers of Sylow $p$-subgroups, for $p=2,3$, and $7$.
>
> **(d)** Determine the orders of the representative elements $c,d,e,f$.
>
> **(e)** Determine all normal subgroups of $G$.

## Hints

> [!hint]- Hint 1
> The class sizes show $|G|=42$; intersect kernels of the order-three linear characters.

## Solution

> [!success]- Solution
> The table describes $G=C_7\rtimes C_6\cong AGL_1(\mathbb F_7)$. The kernel of either linear character of order $3$ has order $14$ and is $N=C_7\rtimes C_2\cong D_7$, proving (a).
>
> On $N$, the first three linear characters restrict trivially and the next three restrict to the sign character. The six-dimensional character restricts as the sum of the three pairwise nonisomorphic two-dimensional irreducible characters of $D_7$; its values are $6,-1,0$ on the identity, nontrivial rotations, and reflections.
>
> The normal $C_7$ is the unique Sylow $7$-subgroup, so $n_7=1$. Complements of orders $2$ and $3$ are conjugate by $C_7$, giving $n_2=n_3=7$. Reading the quotient $C_6$ columns gives $|c|=|d|=6$ and $|e|=|f|=3$ (the remaining nonidentity quotient class is the involution). Finally the normal subgroups are
>
> $$
> 1,\quad C_7,\quad C_7\rtimes C_2,\quad C_7\rtimes C_3,\quad G.
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Sylow Theorems|Sylow Theorems]]

## Notes

- The full seven-column table is source data at [S1, Ch. 10, §4, Ex. 4.11, printed p. 317, PDF p. 329]. The structural identification and deductions are independent.
