---
title: "Exercise Rep4: Computing Matrix Exponentials"
topic: representation-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - representation-theory
  - lie-theory
source: "Lie Groups, Lie Algebras"
created: 2026-01-19
---

# Exercise Rep4: Computing Matrix Exponentials

## Problem Statement

> [!question] Problem
> Compute the matrix exponential $e^{tX}$ for each of the following matrices:
>
> **(a)** $X = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$
>
> **(b)** $X = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
>
> **(c)** $X = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
>
> **(d)** $X = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$
>
> For each, identify which Lie group $e^{tX}$ belongs to.

## Hints

> [!hint]- Hint 1
> For nilpotent matrices (where $X^k = 0$ for some $k$), the exponential series terminates.

> [!hint]- Hint 2
> For part (b), compute $X^2$ first. What do you notice?

> [!hint]- Hint 3
> For part (c), write $X = D + N$ where $D$ is diagonal and $N$ is nilpotent. Check if $[D, N] = 0$.

> [!hint]- Hint 4
> When $[A, B] = 0$, we have $e^{A+B} = e^A e^B$.

## Solution

> [!success]- Solution
>
> **(a)** $X = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$
>
> This is nilpotent: $X^2 = 0$. So:
> $$e^{tX} = I + tX = \begin{pmatrix} 1 & t \\ 0 & 1 \end{pmatrix}$$
>
> This belongs to the **upper triangular unipotent group** $N^+ \subset \text{SL}_2(\mathbb{R})$.
>
> ---
>
> **(b)** $X = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
>
> Compute powers:
> - $X^2 = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix} = -I$
> - $X^3 = -X$
> - $X^4 = I$
>
> So:
> $$e^{tX} = \sum_{k=0}^\infty \frac{t^k X^k}{k!} = \left(\sum_{k \text{ even}} \frac{(-1)^{k/2} t^k}{k!}\right)I + \left(\sum_{k \text{ odd}} \frac{(-1)^{(k-1)/2} t^k}{k!}\right)X$$
> $$= \cos(t)I + \sin(t)X = \begin{pmatrix} \cos t & -\sin t \\ \sin t & \cos t \end{pmatrix}$$
>
> This is a **rotation matrix** in $\text{SO}(2)$.
>
> ---
>
> **(c)** $X = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
>
> Write $X = D + N$ where $D = I$ and $N = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$.
>
> Since $D = I$ commutes with everything, $[D, N] = 0$, so:
> $$e^{tX} = e^{tD} e^{tN} = e^t I \cdot \begin{pmatrix} 1 & t \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} e^t & te^t \\ 0 & e^t \end{pmatrix}$$
>
> This belongs to the **upper triangular group** with positive diagonal, a subgroup of $\text{GL}_2(\mathbb{R})$.
>
> ---
>
> **(d)** $X = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$
>
> Compute: $X^2 = \begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$, $X^3 = 0$.
>
> $$e^{tX} = I + tX + \frac{t^2}{2}X^2 = \begin{pmatrix} 1 & t & t^2/2 \\ 0 & 1 & t \\ 0 & 0 & 1 \end{pmatrix}$$
>
> This belongs to the **Heisenberg group** (unipotent upper triangular $3 \times 3$ matrices), a nilpotent Lie group.

## Related Concepts

- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]
- [[06 - Representation Theory/Concepts/Lie Groups|Lie Groups]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
