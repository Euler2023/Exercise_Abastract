---
title: "Exercise Rep22: Cosets as Matrix Differential-Equation Solutions"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
  - one-parameter-groups
  - differential-equations
source: "Michael Artin, Algebra, 2nd ed., Ch. 9, Section 5, Ex. 5.8, printed p. 285, PDF p. 297"
created: 2026-08-24
---

# Exercise Rep22: Cosets as Matrix Differential-Equation Solutions

## Problem Statement

> [!question] Exercise 5.8
> Let $\varphi(t)=e^{tA}$ be a one-parameter group in a subgroup $G$ of $GL_n$. Prove that the cosets of its image are matrix solutions of the differential equation $dX/dt=AX$.

## Hints

> [!hint]- Hint 1
> Solve the initial-value problem with $X(0)=C$.

> [!hint]- Hint 2
> Check which side of $e^{tA}$ the constant matrix $C$ must occupy.

## Solution

> [!success]- Solution
> Let $H=\{e^{tA}:t\in\mathbb R\}$. For a fixed $C\in G$, define
>
> $$
> X(t)=e^{tA}C.
> $$
>
> Then
>
> $$
> X'(t)=Ae^{tA}C=AX(t),
> \qquad X(0)=C.
> $$
>
> Its image is the right coset $HC$. Conversely, if $X'=AX$ and $X(0)=C$, then
>
> $$
> \frac d{dt}\bigl(e^{-tA}X(t)\bigr)
> =-Ae^{-tA}X(t)+e^{-tA}AX(t)=0.
> $$
>
> Hence $e^{-tA}X(t)=C$ and $X(t)=e^{tA}C$. Therefore the matrix solutions are precisely the parametrized right cosets of $H$.
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[01 - Group Theory/Concepts/Cosets and Lagrange Theorem|Cosets and Lagrange's Theorem]]

## Notes

- **Method boundary:** For the equation $X'=AX$, the relevant sets are right cosets $HC$. Left cosets $CH$ solve $X'=C A C^{-1}X$ in general. The source's unqualified word “cosets” is interpreted accordingly.
- **Source status:** Ex. 5.8 was visually checked at [S1, Ch. 9, §9.5, printed p. 285, PDF p. 297]. The initial-value calculation is independent.
