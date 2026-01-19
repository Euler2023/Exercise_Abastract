---
title: "Exercise MF7: The j-Invariant"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Silverman, Advanced Topics in Elliptic Curves"
created: 2026-01-19
---

# Exercise MF7: The j-Invariant

## Problem Statement

> [!question] Problem
> The $j$-invariant is defined as:
> $$j(\tau) = 1728 \frac{E_4(\tau)^3}{\Delta(\tau)} = \frac{1}{q} + 744 + 196884q + \cdots$$
>
> **(a)** Verify that $j(\tau)$ is a modular function of weight 0 (i.e., $j(\gamma \cdot \tau) = j(\tau)$ for all $\gamma \in \text{SL}_2(\mathbb{Z})$).
>
> **(b)** Compute $j(i)$ and $j(\rho)$ where $\rho = e^{2\pi i/3}$.
>
> **(c)** Explain why $j$ gives a bijection $\mathbb{H}/\text{PSL}_2(\mathbb{Z}) \to \mathbb{C}$.
>
> **(d)** For an elliptic curve $E: y^2 = x^3 + Ax + B$, the $j$-invariant is $j(E) = 1728 \frac{4A^3}{4A^3 + 27B^2}$. Find $j(E)$ for:
> 1. $E_1: y^2 = x^3 - x$
> 2. $E_2: y^2 = x^3 + 1$

## Hints

> [!hint]- Hint 1
> For part (a), use that $E_4$ has weight 4 and $\Delta$ has weight 12. What is the weight of $E_4^3/\Delta$?

> [!hint]- Hint 2
> For part (b), use the special values: $E_4(\rho) = 0$ (since $\rho$ is a cube root of unity with special symmetry), and for $E_6(i) = 0$.

> [!hint]- Hint 3
> For part (c), think about the fact that $j$ has a simple pole at $i\infty$ and no other poles in $\mathcal{F}$.

## Solution

> [!success]- Solution
> **(a)** Weight calculation:
> - $E_4^3$ has weight $12$
> - $\Delta$ has weight $12$
> - Therefore $E_4^3/\Delta$ has weight $12 - 12 = 0$
>
> So for any $\gamma = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in \text{SL}_2(\mathbb{Z})$:
> $$j(\gamma \cdot \tau) = 1728 \frac{E_4(\gamma \cdot \tau)^3}{\Delta(\gamma \cdot \tau)} = 1728 \frac{(c\tau+d)^{12} E_4(\tau)^3}{(c\tau+d)^{12} \Delta(\tau)} = j(\tau)$$
>
> **(b)** Special values:
>
> At $\tau = \rho = e^{2\pi i/3}$:
> - The symmetry $\rho^3 = 1$ and $\rho^2 + \rho + 1 = 0$ implies $E_4(\rho) = 0$
> - Therefore $j(\rho) = 1728 \cdot \frac{0}{\Delta(\rho)} = \boxed{0}$
>
> At $\tau = i$:
> - By symmetry under $S: \tau \mapsto -1/\tau$, we have $E_6(i) = 0$ (since $E_6$ is odd under this)
> - $\Delta(i) = \frac{E_4(i)^3 - E_6(i)^2}{1728} = \frac{E_4(i)^3}{1728}$
> - So $j(i) = 1728 \frac{E_4(i)^3}{\Delta(i)} = 1728 \frac{E_4(i)^3}{E_4(i)^3/1728} = \boxed{1728}$
>
> **(c)** The function $j: \mathbb{H}/\text{PSL}_2(\mathbb{Z}) \to \mathbb{C} \cup \{\infty\}$:
> - $j$ has exactly one simple pole (at the cusp $i\infty$)
> - $j$ has exactly one zero (at $\rho$, with multiplicity 3 in $\mathcal{F}$, but $\rho$ has stabilizer of order 3, so effective multiplicity 1)
> - By the valence formula, $\sum \text{ord}_p(j - c) = 1$ for any $c$
> - So $j$ takes every value exactly once, giving a bijection to $\mathbb{C}$.
>
> **(d)** Elliptic curve $j$-invariants:
>
> 1. $E_1: y^2 = x^3 - x$ has $A = -1$, $B = 0$:
> $$j(E_1) = 1728 \frac{4(-1)^3}{4(-1)^3 + 27(0)^2} = 1728 \frac{-4}{-4} = \boxed{1728}$$
> This corresponds to $\tau = i$ (CM by $\mathbb{Z}[i]$).
>
> 2. $E_2: y^2 = x^3 + 1$ has $A = 0$, $B = 1$:
> $$j(E_2) = 1728 \frac{4(0)^3}{4(0)^3 + 27(1)^2} = 1728 \cdot \frac{0}{27} = \boxed{0}$$
> This corresponds to $\tau = \rho$ (CM by $\mathbb{Z}[\omega]$).

## Related Concepts

- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]
- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Elliptic Curves and Modularity|Elliptic Curves and Modularity]]
- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
