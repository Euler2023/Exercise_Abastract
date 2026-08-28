---
title: "Exercise LA310: Determinant Formula for Lattice Index"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - lattices
  - determinants
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 10, About Lattices, Ex. 10.2, printed p. 411, PDF p. 423"
created: 2026-08-28
---

# Exercise LA310: Determinant Formula for Lattice Index

## Problem Statement

> [!question] Exercise 10.2 — printed statement
> Let $L\subset M$ be lattices with bases $B$ and $C$, respectively, and let $A$ be the integer matrix such that $BA=C$. Prove that $[M:L]=|\det A|$.

> [!warning] Source issue
> Read literally with basis matrices written in columns, “respectively” makes $B$ a basis of $L$ and $C$ a basis of $M$. Then $BA=C$ says $M\subseteq L$, opposite to the displayed inclusion. The intended consistent formulation is: **$C$ is a basis matrix of $M$, $B$ is a basis matrix of $L$, and $CA=B$**. Equivalently, interchange the roles of $B$ and $C$ in the printed assignment.

## Hints

> [!hint]- Hint 1
> Apply the linear isomorphism with matrix $C^{-1}$ and reduce to the sublattice $A\mathbb Z^2\subset\mathbb Z^2$.

## Solution

> [!success]- Solution of the intended statement
> Let the columns of $C$ be a basis of $M$ and the columns of $B$ a basis of $L$. Because $L\subset M$, there is an integer matrix $A$ such that
>
> $$
> B=CA.
> $$
>
> The invertible real-linear map $C^{-1}$ sends $M$ to $\mathbb Z^2$ and $L$ to $A\mathbb Z^2$. It preserves the number of additive cosets, so
>
> $$
> [M:L]=[\mathbb Z^2:A\mathbb Z^2].
> $$
>
> By integer row and column operations, $A$ has Smith normal form
>
> $$
> UAV=\begin{pmatrix}d_1&0\\0&d_2\end{pmatrix},
> $$
>
> where $U,V\in\operatorname{GL}_2(\mathbb Z)$. Unimodular changes do not alter the index. The diagonal sublattice has $|d_1d_2|$ cosets, and
>
> $$
> |d_1d_2|=|\det(UAV)|=|\det A|.
> $$
>
> Hence
>
> $$
> \boxed{[M:L]=|\det A|.}
> $$
>
> Under the literal printed relation $BA=C$ with $B$ assigned to $L$ and $C$ to $M$, the valid conclusion would instead be $[L:M]=|\det A|$ whenever $M\subseteq L$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Routing:** Linear Algebra and Modules is primary because the proof reduces lattice inclusion to an integer change-of-basis matrix.
- **Source issue status:** The printed wording and equation were both preserved above. The direction conflict was verified on the source exercise page and was not silently repaired.
- **Source status:** [S1, Ch. 13, §13.10, Ex. 10.2, printed p. 411, PDF p. 423]. The corrected proof is independent.
