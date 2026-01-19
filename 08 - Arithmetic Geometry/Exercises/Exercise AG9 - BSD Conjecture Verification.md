---
title: "Exercise AG9: BSD Conjecture Verification"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - bsd-conjecture
  - elliptic-curves
source: "Advanced arithmetic geometry"
created: 2026-01-19
---

# Exercise AG9: BSD Conjecture Verification

## Problem Statement

> [!question]
> Consider the elliptic curve $E: y^2 = x^3 - x$ (the "congruent number curve" for $n = 1$).
>
> **(a)** Show that $E$ has complex multiplication by $\mathbb{Z}[i]$.
> Hint: The map $(x, y) \mapsto (-x, iy)$ is an endomorphism.
>
> **(b)** Compute $\#E(\mathbb{F}_p)$ for $p = 5, 13, 17, 29$ (all $\equiv 1 \pmod 4$).
> For these primes, $a_p = 2\text{Re}(\pi)$ where $p = \pi \bar{\pi}$ in $\mathbb{Z}[i]$.
>
> **(c)** The L-function of $E$ factors through a Hecke character. Explain why $L(E, 1) \neq 0$.
>
> **(d)** By the Gross-Zagier/Kolyvagin theorem, what does $L(E, 1) \neq 0$ imply about $E(\mathbb{Q})$?

## Hints

> [!hint]- Hint 1
> For (a): Check that $(-x, iy)$ lies on $E$ when $(x, y)$ does, working over $\mathbb{C}$.

> [!hint]- Hint 2
> For (b): Write $p = a^2 + b^2$ in $\mathbb{Z}[i]$ and compute $a_p$.

> [!hint]- Hint 3
> For (d): The theorem states that $\text{ord}_{s=1} L(E, s) = \text{rank } E(\mathbb{Q})$ when this order is 0 or 1.

## Solution

> [!success]- Solution
>
> **(a)** Let $\phi(x, y) = (-x, iy)$.
>
> Check: If $(x, y) \in E(\mathbb{C})$, i.e., $y^2 = x^3 - x$, then:
> $$(iy)^2 = -y^2 = -(x^3 - x) = -x^3 + x$$
> $$(-x)^3 - (-x) = -x^3 + x$$ ✓
>
> So $\phi$ maps $E \to E$.
>
> Compute $\phi^2$: $\phi^2(x, y) = \phi(-x, iy) = (x, i \cdot iy) = (x, -y) = -P$
>
> So $\phi^2 = [-1]$, meaning $\phi$ satisfies $\phi^2 + 1 = 0$.
>
> Thus $\text{End}(E) \supseteq \mathbb{Z}[\phi] \cong \mathbb{Z}[i]$.
>
> In fact, $\text{End}(E) = \mathbb{Z}[i]$ (this curve has CM by $\mathbb{Q}(i)$).
>
> **(b)** For CM curves, if $p \equiv 1 \pmod 4$, write $p = \pi \bar{\pi}$ where $\pi = a + bi \in \mathbb{Z}[i]$.
>
> Then $a_p = \pi + \bar{\pi} = 2a$ (with appropriate normalization).
>
> | $p$ | $p = a^2 + b^2$ | $\pi$ | $a_p = 2a$ | $\#E(\mathbb{F}_p)$ |
> |-----|-----------------|-------|------------|---------------------|
> | 5 | $1^2 + 2^2$ | $1 + 2i$ | $\pm 2$ | $5 + 1 - (\pm 2)$ |
> | 13 | $2^2 + 3^2$ | $2 + 3i$ | $\pm 4$ | $13 + 1 - (\pm 4)$ |
> | 17 | $1^2 + 4^2$ | $1 + 4i$ | $\pm 2$ | $17 + 1 - (\pm 2)$ |
> | 29 | $2^2 + 5^2$ | $2 + 5i$ | $\pm 4$ | $29 + 1 - (\pm 4)$ |
>
> The sign depends on normalization (choosing $\pi \equiv 1 \pmod{2+2i}$).
>
> For $E: y^2 = x^3 - x$:
> - $p = 5$: $\#E(\mathbb{F}_5) = 4$ (from direct count), so $a_5 = 2$
> - $p = 13$: $a_{13} = -4$ (direct computation shows $\#E = 18$)
>
> **(c)** Since $E$ has CM, its L-function equals a Hecke L-function:
> $$L(E, s) = L(\psi, s)$$
> for a Hecke character $\psi$ of $\mathbb{Q}(i)$.
>
> The value $L(\psi, 1)$ can be computed explicitly and is nonzero.
>
> Specifically: $L(E, 1) = \frac{\Omega}{\sqrt{4}} \cdot L(\psi, 1) \neq 0$
>
> (The explicit value involves the period $\Omega = \int_E \omega$.)
>
> **(d)** By Gross-Zagier and Kolyvagin's theorem:
>
> > If $\text{ord}_{s=1} L(E, s) \leq 1$, then $\text{rank } E(\mathbb{Q}) = \text{ord}_{s=1} L(E, s)$.
>
> Since $L(E, 1) \neq 0$, we have $\text{ord}_{s=1} L(E, s) = 0$.
>
> Therefore: **$\text{rank } E(\mathbb{Q}) = 0$**
>
> This means $E(\mathbb{Q})$ is finite, consisting only of torsion points.
>
> Indeed: $E(\mathbb{Q}) = E(\mathbb{Q})_{\text{tors}} = \{(0, 0), (1, 0), (-1, 0), \mathcal{O}\} \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/BSD Conjecture|BSD Conjecture]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[07 - Modular Forms/Concepts/L-functions|L-functions]]
