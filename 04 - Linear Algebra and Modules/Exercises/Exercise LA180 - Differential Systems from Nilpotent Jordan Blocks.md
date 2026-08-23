---
title: "Exercise LA180: Differential Systems from Nilpotent Jordan Blocks"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
  - differential-equations
  - matrix-exponential
  - jordan-blocks
source: "Michael Artin, Algebra, 2nd ed., Ch. 5, §4, Ex. 4.5, printed p. 152, PDF p. 164"
created: 2026-08-24
---

# Exercise LA180: Differential Systems from Nilpotent Jordan Blocks

## Problem Statement

> [!question] Exercise 4.5
> Solve $dX/dt=AX$ for
>
> $$
> \text{(a) }\begin{pmatrix}2&0\\1&2\end{pmatrix},\qquad
> \text{(b) }\begin{pmatrix}0&0\\1&0\end{pmatrix},\qquad
> \text{(c) }\begin{pmatrix}1&0&0\\1&1&0\\0&1&1\end{pmatrix}.
> $$

## Hints

> [!hint]- Hint 1
> Write $A=\lambda I+N$ with $N$ nilpotent and compute $e^{tA}$.

## Solution

> [!success]- Solution
> Every solution has the form $X(t)=e^{tA}C$ for a constant column $C$.
>
> (a) Here $A=2I+N$ and $N^2=0$, so
>
> $$
> e^{tA}=e^{2t}\begin{pmatrix}1&0\\t&1\end{pmatrix}.
> $$
>
> (b) Since $A^2=0$,
>
> $$
> e^{tA}=\begin{pmatrix}1&0\\t&1\end{pmatrix}.
> $$
>
> (c) Here $A=I+N$ and $N^3=0$, giving
>
> $$
> e^{tA}=e^t\begin{pmatrix}
> 1&0&0\\
> t&1&0\\
> \frac{t^2}{2}&t&1
> \end{pmatrix}.
> $$
>
> Multiplying the appropriate displayed matrix by an arbitrary constant vector gives the full solution family in each case.

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[04 - Linear Algebra and Modules/Concepts/Diagonalization|Diagonalization]]

## Notes

- **Source status:** The three lower-triangular matrices were visually checked at [S1, Ch. 5, §4, Ex. 4.5, printed p. 152, PDF p. 164]. The exponentials are independently computed.

