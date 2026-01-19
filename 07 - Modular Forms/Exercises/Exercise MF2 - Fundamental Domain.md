---
title: "Exercise MF2: The Fundamental Domain"
topic: modular-forms
difficulty: beginner
status: not-started
tags:
  - exercise
  - modular-forms
source: "Diamond & Shurman, A First Course in Modular Forms"
created: 2026-01-19
---

# Exercise MF2: The Fundamental Domain

## Problem Statement

> [!question] Problem
> The standard fundamental domain for $\text{PSL}_2(\mathbb{Z})$ is:
> $$\mathcal{F} = \left\{ \tau \in \mathbb{H} : |\tau| \geq 1, \, -\frac{1}{2} \leq \text{Re}(\tau) \leq \frac{1}{2} \right\}$$
>
> **(a)** For each of the following points, find an equivalent point in $\mathcal{F}$ (or on its boundary):
> 1. $\tau_1 = 3 + 2i$
> 2. $\tau_2 = \frac{i}{3}$
> 3. $\tau_3 = -\frac{3}{2} + i$
>
> **(b)** Show that $i$ and $\rho = e^{2\pi i/3} = \frac{-1+i\sqrt{3}}{2}$ are fixed points of certain elements of $\text{PSL}_2(\mathbb{Z})$.
>
> **(c)** Why are there no other fixed points in the interior of $\mathcal{F}$?

## Hints

> [!hint]- Hint 1
> For part (a), use the generators: $T: \tau \mapsto \tau + 1$ and $S: \tau \mapsto -1/\tau$. Apply $T^n$ to shift the real part, and $S$ when $|\tau| < 1$.

> [!hint]- Hint 2
> For part (b), recall that $S = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$. What is $S \cdot i$? For $\rho$, try $ST$.

> [!hint]- Hint 3
> For part (c), think about what it means for $\gamma \cdot \tau = \tau$ with $\gamma \neq \pm I$. This gives a quadratic equation for $\tau$.

## Solution

> [!success]- Solution
> **(a)** Finding equivalent points:
>
> 1. $\tau_1 = 3 + 2i$:
>    - Apply $T^{-3}$: $\tau_1 - 3 = 2i$
>    - Check: $|2i| = 2 \geq 1$ and $\text{Re}(2i) = 0 \in [-\frac{1}{2}, \frac{1}{2}]$ ✓
>    - **Answer: $2i$**
>
> 2. $\tau_2 = \frac{i}{3}$:
>    - Since $|i/3| = 1/3 < 1$, apply $S$: $-1/(i/3) = -3/i = 3i$
>    - Check: $|3i| = 3 \geq 1$ and $\text{Re}(3i) = 0$ ✓
>    - **Answer: $3i$**
>
> 3. $\tau_3 = -\frac{3}{2} + i$:
>    - Apply $T^2$: $-\frac{3}{2} + i + 2 = \frac{1}{2} + i$
>    - Check: $|\frac{1}{2} + i| = \sqrt{1/4 + 1} = \sqrt{5}/2 \approx 1.12 \geq 1$ ✓
>    - **Answer: $\frac{1}{2} + i$** (on boundary)
>
> **(b)** Fixed points:
>
> For $i$: $S \cdot i = \frac{0 \cdot i + (-1)}{1 \cdot i + 0} = \frac{-1}{i} = i$. So $i$ is fixed by $S$.
>
> For $\rho$: Let $ST = \begin{pmatrix} 0 & -1 \\ 1 & 1 \end{pmatrix}$. Then:
> $$ST \cdot \rho = \frac{-1}{\rho + 1} = \frac{-1}{\frac{-1+i\sqrt{3}}{2} + 1} = \frac{-1}{\frac{1+i\sqrt{3}}{2}} = \frac{-2}{1+i\sqrt{3}}$$
> $$= \frac{-2(1-i\sqrt{3})}{(1+i\sqrt{3})(1-i\sqrt{3})} = \frac{-2(1-i\sqrt{3})}{4} = \frac{-1+i\sqrt{3}}{2} = \rho$$
>
> So $\rho$ is fixed by $ST$ (which has order 3 in $\text{PSL}_2(\mathbb{Z})$).
>
> **(c)** If $\gamma \cdot \tau = \tau$ for $\gamma = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \neq \pm I$, then:
> $$\frac{a\tau + b}{c\tau + d} = \tau \implies a\tau + b = c\tau^2 + d\tau \implies c\tau^2 + (d-a)\tau - b = 0$$
>
> If $c \neq 0$, this quadratic has discriminant $(d-a)^2 + 4bc = (a+d)^2 - 4(ad-bc) = (a+d)^2 - 4$.
>
> For $\tau \in \mathbb{H}$, we need $(a+d)^2 < 4$, so $|a+d| < 2$, meaning $a + d \in \{-1, 0, 1\}$.
> This restricts to elliptic elements, whose fixed points are exactly $i$ and $\rho$ (and their $\Gamma$-equivalents).

## Related Concepts

- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]
