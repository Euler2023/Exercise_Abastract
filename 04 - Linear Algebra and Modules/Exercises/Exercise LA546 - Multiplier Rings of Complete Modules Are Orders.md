---
title: "Exercise LA546: Multiplier Rings of Complete Modules Are Orders"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - neukirch-algebraic-number-theory
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §12, Exercise 3, printed p. 84, PDF p. 103"
created: 2026-10-20
---

# Exercise LA546: Multiplier Rings of Complete Modules Are Orders

## Problem Statement

> [!question] Neukirch I.12.3
> Let $K$ be a number field of degree $n=[K:\mathbb Q]$. A complete module in $K$ is a subgroup of the form
> $$
> M=\mathbb Z\alpha_1+\cdots+\mathbb Z\alpha_n,
> $$
> where $\alpha_1,\ldots,\alpha_n$ are linearly independent elements of $K$. Show that the ring of multipliers
> $$
> \mathfrak o=\{\alpha\in K:\alpha M\subseteq M\}
> $$
> is an order in $K$, but in general not the maximal order.

## Hints

> [!hint]- Hint 1: Represent multiplication by an integer matrix
> A multiplier preserves the lattice basis of $M$, so its multiplication map has an integral $n\times n$ matrix. Apply its characteristic polynomial.

> [!hint]- Hint 2: Find enough multipliers
> Clear all denominators in the structure constants $\alpha_i\alpha_j=\sum_k c_{ijk}\alpha_k$ simultaneously. Then a nonzero integer multiple of every $\alpha_i$ preserves $M$.

> [!hint]- Hint 3: Choose a proper order as its own module
> For a subring $M$ containing $1$, its multiplier ring equals $M$. Try $M=\mathbb Z+2\mathbb Zi$ in $\mathbb Q(i)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
>
> The independence in the question is over $\mathbb Q$: the $n$ elements form a rational basis of $K$ and an integer basis of $M$. The set $\mathfrak o$ contains $1$ and is closed under addition, subtraction, and multiplication, because the corresponding operations preserve $M$. It is a subring of $K$.
>
> For $\alpha\in\mathfrak o$, multiplication on the basis of $M$ is represented by a matrix $T_\alpha\in M_n(\mathbb Z)$. Its characteristic polynomial $f_\alpha(T)=\det(TI-T_\alpha)$ is monic in $\mathbb Z[T]$. Cayley–Hamilton gives $f_\alpha(T_\alpha)=0$. Composition of these multiplication maps is multiplication in $K$, hence $f_\alpha(\alpha)\alpha_1=0$. Since $\alpha_1\ne0$ and $K$ is a field, $f_\alpha(\alpha)=0$. Therefore every multiplier is an algebraic integer and
> $$
> \mathfrak o\subseteq\mathcal O_K.
> $$
> Next express all basis products as
> $$
> \alpha_i\alpha_j=\sum_{k=1}^n c_{ijk}\alpha_k,\qquad c_{ijk}\in\mathbb Q.
> $$
> There are finitely many coefficients, so choose an integer $N\ge1$ such that every $Nc_{ijk}$ is integral. Then $(N\alpha_i)M\subseteq M$ for each $i$, which shows
> $$
> NM\subseteq\mathfrak o\subseteq\mathcal O_K.
> $$
> The elements $N\alpha_1,\ldots,N\alpha_n$ remain rationally independent. The source integral-basis input says that $\mathcal O_K$ is free of rank $n$ over $\mathbb Z$; its subgroup $\mathfrak o$ is therefore free of rank at most $n$, and the contained independent elements force its rank to be $n$. Thus $\mathfrak o$ is a subring of $\mathcal O_K$ containing $1$ and a full integer lattice, which is precisely an order. In particular it has finite additive index in $\mathcal O_K$.
>
> For nonmaximality take $K=\mathbb Q(i)$ and $M=\mathbb Z+2\mathbb Zi$. This is a subring containing $1$, since $(2i)^2=-4$. A multiplier $\alpha$ must belong to $M$ because $\alpha\cdot1\in M$, and every element of $M$ is a multiplier because $M$ is a ring. Hence $\mathfrak o=M$. The element $i$ is integral (it satisfies $T^2+1=0$) but is not in $M$, so this order is strictly smaller than the maximal order.

## Related Concepts

- [[02 - Ring Theory/Concepts/Orders and Conductors|Orders and Multiplier Rings]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integrality]]

## Notes

- **Source verification:** The complete exercise and any printed hint were visually checked in [S4, Ch. I, §12, Exercise 3, printed p. 84, PDF p. 103]. No source figure is required.
- **Source inputs:** The definition of an order was checked in [S4, Ch. I, §12, Definition (12.1), printed p. 72, PDF p. 91]; the multiplier construction is also stated in the prose on printed p. 73 / PDF p. 92. The source's integral-basis theorem is [S4, Ch. I, §2, Proposition (2.10), printed p. 12, PDF p. 31]. Cayley–Hamilton and the subgroup theorem for finite-rank free integer modules are named standard linear-algebra inputs.
- **Proof status:** The matrix integrality argument, denominator construction, full-rank conclusion, and explicit proper-order counterexample are independently supplied here, rather than treating the exercise as already solved by the prose assertion.
- **Routing:** Integral multiplication matrices, characteristic polynomials, and complete integer lattices are the primary toolkit, so this note belongs to Linear Algebra and Modules.
