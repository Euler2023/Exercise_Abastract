---
title: "Exercise Rep169: Real Lie Algebras in Dimensions One and Two"
topic: representation-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - representation-theory
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 2, printed p. 73, PDF p. 85"
source_refs:
  - "S10/ch-3/sec-9/ex-2"
created: 2026-11-25
---

# Exercise Rep169: Real Lie Algebras in Dimensions One and Two

## Problem Statement

> [!question] Original Chapter 3, Exercise 2
> Classify up to isomorphism all one-dimensional and two-dimensional real Lie algebras. There is one isomorphism class of one-dimensional algebras and two isomorphism classes of two-dimensional algebras.

## Hints

> [!hint]- Hint 1
> In dimension two, a skew-symmetric bilinear bracket is determined by the bracket of the two basis vectors.

> [!hint]- Hint 2
> In the nonabelian case, put $v=[x,y]\ne0$ for a basis $x,y$. Choose $w$ independent of $v$, then compute the coefficient of $v$ in $[w,v]$ using the determinant of their coordinates in the original basis.

## Solution

> [!success]- Solution
> **Proof scope:** Independent classification by a choice of basis and a matrix realization of the nonabelian case.
>
> In dimension one, if $x$ is a basis vector, then $[ax,bx]=ab[x,x]=0$ for all real $a,b$. Thus the only class is $\mathbb R$ with zero bracket.
>
> In dimension two, choose a basis $x,y$ and set $v=[x,y]$. If $v=0$, all brackets vanish by bilinearity and skew symmetry, so this gives the abelian class $\mathbb R^2$.
>
> Suppose $v\ne0$. Choose $w$ linearly independent of $v$. Write $w=ax+by$ and $v=cx+dy$. Then
> $$
> [w,v]=(ad-bc)[x,y]=(ad-bc)v.
> $$
> The determinant $ad-bc$ is nonzero by independence. Rescale $w$ to $u=w/(ad-bc)$, so that the bracket in the basis $u,v$ is determined by
> $$
> [u,v]=v.
> $$
> The basis map between any two Lie algebras with this relation preserves the bracket, since it preserves brackets of the basis elements. Thus there is at most one nonabelian class.
>
> For existence, set
> $$
> U=\begin{pmatrix}1&0\\0&0\end{pmatrix},
> \qquad
> V=\begin{pmatrix}0&1\\0&0\end{pmatrix}.
> $$
> Then $UV=V$ and $VU=0$. Their span is closed under commutators by bilinearity, so it is a Lie algebra by the matrix commutator construction [S10, §3.1, Example 3.3, printed p. 50, PDF p. 62]. It realizes $[U,V]=V$. Since isomorphisms preserve brackets, its nonzero bracket distinguishes it from the abelian class. This gives exactly the two classes in dimension two.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Basis and Dimension|Basis and Dimension]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The classification request and both class counts were checked against the 200 dpi rendering of printed p. 73 / PDF p. 85. The matrix commutator construction was checked at printed p. 50 / PDF p. 62.
- **Routing:** The object classified is the Lie bracket up to an isomorphism of Lie algebras. A basis calculation gives the unique nonabelian normal form.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
