---
title: "Exercise LA661: Connecting Complex Invertible Matrices by a Detour"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 1, Section 1.6, Exercise 12, printed p. 28, PDF p. 40"
source_refs:
  - "S10/ch-1/sec-6/ex-12"
created: 2026-11-12
---

# Exercise LA661: Connecting Complex Invertible Matrices by a Detour

## Problem Statement

> [!question] Original Exercise 12
> This problem gives an alternative proof of Proposition 1.11, namely that $\mathrm{GL}(n;\mathbb C)$ is connected. Suppose $A$ and $B$ are invertible $n\times n$ matrices. Show that there are only finitely many complex numbers $\lambda$ for which $\det(\lambda A+(1-\lambda)B)=0$. Show that there exists a continuous path $A(t)$ of the form $A(t)=\lambda(t)A+(1-\lambda(t))B$ connecting $A$ to $B$ and such that $A(t)$ lies in $\mathrm{GL}(n;\mathbb C)$. Here, $\lambda(t)$ is a continuous path in the plane with $\lambda(0)=0$ and $\lambda(1)=1$.

> [!warning] Source issue: endpoint order
> The printed formula and endpoint values give $A(0)=B$ and $A(1)=A$. They therefore describe the path in the reverse direction to the phrase “connecting $A$ to $B$” if that phrase specifies an order. We preserve the formula and endpoint values, construct the resulting path, and reverse its parameter when a path from $A$ to $B$ is wanted.

## Hints

> [!hint]- Hint 1
> The determinant is a polynomial in $\lambda$. Why is it not the zero polynomial?

> [!hint]- Hint 2
> Let $F$ be its finite zero set. Choose a point $z\in\mathbb C$ lying on none of the real lines through $0$ and a point of $F$, or through $1$ and a point of $F$. Use the broken line $0\to z\to1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation with the printed endpoint order retained.
>
> Let $n\ge1$ and define
> $$
> p(\lambda)=\det(B+\lambda(A-B)).
> $$
> The Leibniz determinant formula expresses $p$ as a polynomial of degree at most $n$. Since
> $$
> p(0)=\det B\ne0,\qquad p(1)=\det A\ne0,
> $$
> it is not the zero polynomial. A nonzero polynomial of degree $d$ has at most $d$ distinct roots, by the factor theorem and induction on $d$. Thus its zero set $F\subset\mathbb C$ is finite and contains neither $0$ nor $1$.
>
> We construct the required detour explicitly. If $F$ is empty, take $\lambda(t)=t$. Otherwise, regard $\mathbb C$ as the real plane. For each $\xi\in F$, exclude the real line through $0,\xi$ and the real line through $1,\xi$. There are finitely many excluded lines. A line intersects the unit circle in at most two points, whereas the circle has infinitely many points. Consequently, one can choose $z$ on that circle outside all these lines and with $z\ne1$.
>
> Neither segment $[0,z]$ nor $[z,1]$ contains a point $\xi$ of $F$: such an occurrence would make $z,0,\xi$ or $z,1,\xi$ collinear, contrary to the choice of $z$. Define
> $$
> \lambda(t)=
> \begin{cases}
> 2tz,&0\le t\le\frac12,\\
> (2-2t)z+(2t-1),&\frac12\le t\le1.
> \end{cases}
> $$
> The two expressions agree at $t=\frac12$, so $\lambda$ is continuous. It satisfies $\lambda(0)=0$, $\lambda(1)=1$, and $\lambda(t)\notin F$ for all $t$.
>
> Therefore
> $$
> A(t)=\lambda(t)A+(1-\lambda(t))B
> $$
> is entrywise continuous and satisfies $\det A(t)=p(\lambda(t))\ne0$. It remains in $\mathrm{GL}(n;\mathbb C)$ and has endpoints $B,A$. The reversed path $t\mapsto A(1-t)$ has endpoints $A,B$.
>
> Since $A,B$ were arbitrary, $\mathrm{GL}(n;\mathbb C)$ is path connected and hence connected.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Path Connectedness and Path Components|Path Connectedness and Path Components]]
- [[04 - Linear Algebra and Modules/Concepts/Classical Linear Groups|Classical Linear Groups]]

## Notes

- **Source status:** The complete numbered problem, including both printed endpoint values, was checked on the 200 dpi original page, printed p. 28 / PDF p. 40. The proof is independently supplied.
- **Imported inputs:** The factor theorem for polynomials and the implication from path connectedness to connectedness. The required avoidance path is constructed in the proof.
- **Method boundary:** A real segment between invertible matrices can meet singular matrices. The complex detour is essential; for example, $\mathrm{GL}(1;\mathbb R)=\mathbb R^\times$ has two components.
- **Verification:** For $A=[1]$ and $B=[-1]$, $p(\lambda)=2\lambda-1$ vanishes at $1/2$. Taking $z=i$ makes both detour segments avoid this root.
- **Routing:** The principal tools are a determinant polynomial and a path in the complex plane.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
