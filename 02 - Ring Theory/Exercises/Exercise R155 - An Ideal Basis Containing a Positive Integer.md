---
title: "Exercise R155: An Ideal Basis Containing a Positive Integer"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - quadratic-integers
  - ideal-lattices
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 3, Ideals in Z[sqrt(-5)], Ex. 3.3, printed p. 409, PDF p. 421"
created: 2026-08-28
---

# Exercise R155: An Ideal Basis Containing a Positive Integer

## Problem Statement

> [!question] Exercise 3.3
> Let $A$ be an ideal of the ring of integers $R$ in an imaginary quadratic field. Prove that there is a lattice basis for $A$, one of whose elements is an ordinary positive integer.

## Hints

> [!hint]- Hint 1
> If $0\neq\alpha\in A$, then $N(\alpha)=\alpha\overline\alpha$ is a positive ordinary integer in $A$.

> [!hint]- Hint 2
> Choose the least positive integer in $A$ and show that it is primitive in the free abelian group $A$.

## Solution

> [!success]- Solution
> Choose $0\neq\alpha\in A$. Since $\overline\alpha\in R$ and $A$ is an ideal,
>
> $$
> N(\alpha)=\alpha\overline\alpha\in A.
> $$
>
> In an imaginary quadratic field this norm is a positive ordinary integer. Hence $A\cap\mathbb Z_{>0}$ is nonempty. Let $n$ be its least element.
>
> We claim that $n$ is primitive in the rank-two free abelian group $A$. If $n=km$ with $k>1$ an integer and $m\in A$, then $m=n/k$ is rational. It is also an algebraic integer because $m\in R$, so $m$ is an ordinary integer. After changing its sign if necessary, $0<m<n$ and $m\in A$, contradicting the minimality of $n$.
>
> A primitive element of a rank-two free abelian group extends to a basis. Explicitly, if $(u,v)$ is any lattice basis and
>
> $$
> n=ru+sv,
> $$
>
> primitivity gives $\gcd(r,s)=1$. Choose $p,q\in\mathbb Z$ with $rq-sp=1$. Then the change-of-basis matrix
>
> $$
> \begin{pmatrix}r&p\\s&q\end{pmatrix}
> $$
>
> is unimodular, so $(n,pu+qv)$ is a lattice basis of $A$. Its first element is the desired positive integer.

## Related Concepts

- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Routing:** Ring Theory is primary because the ideal property puts the norm inside $A$; lattice primitivity then completes the basis argument.
- **Imported result:** A rational algebraic integer is an ordinary integer, and a primitive vector in $\mathbb Z^2$ extends to a unimodular basis.
- **Source status:** The problem is from [S1, Ch. 13, §13.3, Ex. 3.3, printed p. 409, PDF p. 421]. The minimal-positive-integer proof is independent.
