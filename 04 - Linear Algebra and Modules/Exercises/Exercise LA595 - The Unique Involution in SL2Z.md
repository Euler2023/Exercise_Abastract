---
title: "Exercise LA595: The Unique Involution in SL2Z"
topic: linear-algebra
difficulty: beginner
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.3, Exercise 2.3.3, printed p. 56, PDF p. 71"
source_refs:
  - "S7/ch-2/sec-3/ex-3"
created: 2026-10-28
---

# Exercise LA595: The Unique Involution in SL2Z

## Problem Statement

> [!question] Original Exercise 2.3.3
> Show that if $\gamma\in SL_2(\mathbb Z)$ has order $2$ then $\gamma=-I$.
>
> Here order $2$ means $\gamma^2=I$ and $\gamma\ne I$, as a matrix. Both $I$ and $-I$ induce the identity fractional linear transformation on the upper half-plane.

## Hints

> [!hint]- Hint 1
> For a two-by-two matrix of determinant $1$, write the characteristic-polynomial identity in terms of $t=\operatorname{tr}\gamma$.

> [!hint]- Hint 2
> Substituting $\gamma^2=I$ gives $t\gamma=2I$. First rule out $t=0$, and then use the determinant to determine the resulting scalar matrix.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Let $t=\operatorname{tr}\gamma$. The two-by-two Cayley–Hamilton identity, also obtained directly by multiplying out the four entries, is
> $$
> \gamma^2-t\gamma+(\det\gamma)I=0.
> $$
> Since $\det\gamma=1$ and $\gamma^2=I$, this becomes
> $$
> t\gamma=2I.
> $$
> If $t=0$, it would say $0=2I$, which is impossible over $\mathbb Z$. Therefore $t\ne0$, and, regarding the same matrix over $\mathbb Q$,
> $$
> \gamma=\frac2t I.
> $$
> Taking determinants gives $(2/t)^2=1$, so $\gamma=I$ or $\gamma=-I$. Exact order $2$ excludes $\gamma=I$. Hence $\gamma=-I$.
>
> Conversely, $(-I)^2=I$ and $-I\ne I$, so $-I$ really does have order $2$ in $SL_2(\mathbb Z)$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Eigenvalues and Eigenvectors|Eigenvalues and Eigenvectors]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]

## Notes

- **Source status:** The statement was checked on the rendered original, printed p. 56 / PDF p. 71. The preceding discussion on printed p. 54 / PDF p. 69 uses the exercise to exclude matrix orders $1$ and $2$ as nontrivial fixing transformations.
- **Proof status:** The solution is independently derived using the explicit two-by-two characteristic identity; it does not assume a classification of finite-order modular matrices.
- **Boundary:** The hypothesis $\det\gamma=1$ is essential. The matrix $\operatorname{diag}(1,-1)$ has order $2$ and is not $-I$, but has determinant $-1$.
- **Matrix order and effective action:** The class of $-I$ is the identity in $PSL_2(\mathbb Z)$. This exercise does not say that $PSL_2(\mathbb Z)$ has no elements of order $2$.
- **Routing:** The proof uses the trace, determinant, and characteristic identity of a matrix.
- **Learning status:** The status remains not-started.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
