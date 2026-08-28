---
title: "Exercise R185: Lattice Subrings of the Complex Numbers"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-orders
  - lattices
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Miscellaneous Problem M.1, printed p. 411, PDF p. 423"
created: 2026-08-28
---

# Exercise R185: Lattice Subrings of the Complex Numbers

## Problem Statement

> [!question] Miscellaneous Problem M.1
> Describe the subrings $S$ of $\mathbb C$ that are lattices in the complex plane.

## Hints

> [!hint]- Hint 1
> Under Artin's unital convention, first show that $S\cap\mathbb R=\mathbb Z$.

> [!hint]- Hint 2
> The rational span $\mathbb Q S$ is a two-dimensional field contained in $\mathbb C$, and it cannot be real.

## Solution

> [!success]- Solution
> Under the convention that subrings contain the same identity, the answer is:
>
> $$
> \boxed{\text{exactly the orders in imaginary quadratic fields.}}
> $$
>
> Indeed, $1\in S$. If $S$ contained a noninteger real rational number, then its additive group on the real axis would contain an element $1/m$ with $m>1$ after choosing a primitive generator; closure under powers would give elements arbitrarily close to $0$, contradicting discreteness. Hence $S\cap\mathbb R=\mathbb Z$.
>
> Since $S$ is a lattice, its rational span
>
> $$
> K=\mathbb Q\otimes_{\mathbb Z}S
> $$
>
> has dimension two over $\mathbb Q$. It is a finite-dimensional domain, hence a field. Because $S$ has real rank two in the complex plane and is not contained in the real axis, $K$ is an imaginary quadratic field. Multiplication by any $\alpha\in S$ is represented by an integer matrix on the lattice $S$, so $\alpha$ satisfies its monic characteristic polynomial in $\mathbb Z[x]$. Thus $S\subseteq\mathcal O_K$, and $S$ has finite index there: it is an order.
>
> Conversely, every order in an imaginary quadratic field is a rank-two discrete subring of $\mathbb C$, hence a lattice. More explicitly, for square-free $d<0$, every such ring is
>
> $$
> S=\mathbb Z+f\mathcal O_{\mathbb Q(\sqrt d)}
> \qquad(f\ge1).
> $$
>
> Thus
>
> $$
> S=
> \begin{cases}
> \mathbb Z[f\sqrt d],&d\equiv2,3\pmod4,\\
> \mathbb Z\!\left[f\dfrac{1+\sqrt d}{2}\right],&d\equiv1\pmod4.
> \end{cases}
> $$

## Related Concepts

- [[02 - Ring Theory/Concepts/Subrings|Subrings]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Routing:** Ring Theory is primary because multiplicative closure classifies the lattices as quadratic orders.
- **Convention boundary:** If “subring” is allowed to omit the identity, additional nonunital lattice rings occur. The classification above follows the unital convention used in the text.
- **External standard input:** The unique description of an order as $\mathbb Z+f\mathcal O_K$ is a standard theorem about quadratic orders; the reduction to an imaginary quadratic order is proved here.
- **Source status:** The problem is from [S1, Ch. 13, Misc. M.1, printed p. 411, PDF p. 423].
