---
title: "Exercise AG5: Hasse-Minkowski Theorem"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - local-global
source: "Classical number theory"
created: 2026-01-19
---

# Exercise AG5: Hasse-Minkowski Theorem

## Problem Statement

> [!question]
> The **Hasse-Minkowski theorem** states that a quadratic form over $\mathbb{Q}$ represents zero nontrivially if and only if it does so over $\mathbb{R}$ and over $\mathbb{Q}_p$ for all primes $p$.
>
> Consider the quadratic form $Q(x, y, z) = x^2 + y^2 - 3z^2$.
>
> **(a)** Show that $Q$ represents zero over $\mathbb{R}$ (i.e., has a non-trivial real solution).
>
> **(b)** Show that $Q$ represents zero over $\mathbb{Q}_3$ by finding a solution modulo $9$.
>
> **(c)** Conclude that $Q$ has a nontrivial rational solution. Find one explicitly.
>
> **(d)** Now consider $R(x, y, z) = x^2 + y^2 + z^2$. Show that $R$ does NOT represent zero over $\mathbb{R}$. What does this tell us about rational solutions?

## Hints

> [!hint]- Hint 1
> For (a): Can you find real numbers with $x^2 + y^2 = 3z^2$? Try $z = 1$.

> [!hint]- Hint 2
> For (b): Find $x, y \in \mathbb{Z}$ with $x^2 + y^2 \equiv 3 \pmod{9}$. A solution mod $9$ lifts to $\mathbb{Q}_3$ by Hensel's lemma.

> [!hint]- Hint 3
> For (c): The local solutions guarantee a global solution exists. Search small integers.

## Solution

> [!success]- Solution
>
> **(a)** Over $\mathbb{R}$: Set $z = 1$. We need $x^2 + y^2 = 3$.
>
> Take $x = 1, y = \sqrt{2}$. Then $1 + 2 = 3$ ✓
>
> So $(1, \sqrt{2}, 1)$ is a real solution.
>
> **(b)** Over $\mathbb{Q}_3$: We look for $x^2 + y^2 \equiv 3z^2 \pmod{9}$.
>
> Try $z = 1$: need $x^2 + y^2 \equiv 3 \pmod{9}$.
>
> Squares mod 9: $0, 1, 4, 7$ (since $0^2=0, 1^2=1, 2^2=4, 3^2=0, 4^2=7, 5^2=7, 6^2=0, 7^2=4, 8^2=1$)
>
> Actually: $0^2 \equiv 0$, $1^2 \equiv 1$, $2^2 \equiv 4$, $3^2 \equiv 0$, $4^2 \equiv 7$, $(\pm 1)^2 \equiv 1$, $(\pm 2)^2 \equiv 4$, $(\pm 4)^2 \equiv 7$
>
> Check: $1 + 2 = 3$... but $2$ is not a square mod 9.
>
> Try: $x = 0, y^2 \equiv 3 \pmod{9}$? No, $3$ is not a square mod 9.
>
> Try: $x = 1, y = 4$: $1 + 16 = 17 \equiv 8 \pmod{9}$. No.
>
> Try: $x = 2, y = 4$: $4 + 16 = 20 \equiv 2 \pmod{9}$. No.
>
> Better approach: mod 3 first. $x^2 + y^2 \equiv 0 \pmod{3}$ (since $3z^2 \equiv 0$).
>
> Squares mod 3: $0, 1$. So $x^2 + y^2 \equiv 0 \pmod 3$ requires $x \equiv y \equiv 0 \pmod 3$.
>
> Let $x = 3, y = 0, z = \sqrt{3}$... but we need integer solutions.
>
> Actually for $\mathbb{Q}_3$: $(x, y, z) = (1, 1, 1)$ gives $1 + 1 - 3 = -1 \neq 0$.
>
> Try: $x = 3, y = 0, z = \sqrt{3}$. Better: look for $p$-adic solution directly.
>
> Note: $3 = 1^2 + 1^2 + 1^2$ (sum of 3 squares), so consider $(1, \sqrt{2}, 1)$ type solutions.
>
> In $\mathbb{Q}_3$: Is $2$ a square? Check: $2^{(3-1)/2} = 2^1 = 2 \equiv -1 \pmod{3}$, so $2$ is NOT a square in $\mathbb{F}_3$, hence not in $\mathbb{Z}_3$.
>
> Revised: The form $x^2 + y^2 - 3z^2$ over $\mathbb{Q}_3$. At $z = 1$, need $x^2 + y^2 = 3$. In $\mathbb{Q}_3$, is $3 = x^2 + y^2$ solvable?
>
> Yes! Because $-1$ is not a square mod 3, but $-3 \cdot (-1) = 3$ analysis... Actually the Hilbert symbol $(-1, -3)_3 = 1$, confirming local solvability.
>
> **(c)** A rational solution: Try $(x, y, z) = (1, 1, 1)$: $1 + 1 - 3 = -1$. No.
>
> Try $(2, 1, 1)$: $4 + 1 - 3 = 2$. No.
>
> Try $(1, 0, 1)$: $1 + 0 - 3 = -2$. No.
>
> Actually, for this form: $(1, 1, 1)$ doesn't work. Let me reconsider.
>
> Note: $x^2 + y^2 = 3z^2$ with $z = 1$ means $x^2 + y^2 = 3$, which has NO integer solutions!
>
> The smallest solution: Search systematically...
>
> $z = 2$: $x^2 + y^2 = 12$. We need $12 = a^2 + b^2$. No (since $12 \equiv 0 \pmod 4$ but $12/4 = 3 \equiv 3 \pmod 4$).
>
> Actually $x^2 + y^2 - 3z^2 = 0$ over $\mathbb{Q}$... Hmm, by Legendre's theorem on ternary quadratics, we need to check local conditions more carefully.
>
> The correct solution: $(1, 1, 1)$ is NOT a solution. The form $x^2 + y^2 - 3z^2 = 0$ has **no** nontrivial rational solutions! (Since $-3$ is not a sum of two squares in $\mathbb{Q}$.)
>
> **Correction**: This form fails the local-global principle at $p = 2$ (checking: $x^2 + y^2 \equiv 3 \pmod 8$ is impossible since $x^2 + y^2 \in \{0, 1, 2, 4, 5\} \pmod 8$).
>
> Better example: $Q(x,y,z) = x^2 + y^2 - 5z^2$.
> - Real: $(\sqrt{5}, 0, 1)$ works
> - Mod 5: $(0, 0, 0)$ or need proper analysis
> - Rational: $(2, 1, 1)$: $4 + 1 - 5 = 0$ ✓
>
> **(d)** $R(x, y, z) = x^2 + y^2 + z^2$ over $\mathbb{R}$:
>
> For real numbers, $x^2 \geq 0$, $y^2 \geq 0$, $z^2 \geq 0$.
>
> So $x^2 + y^2 + z^2 = 0$ implies $x = y = z = 0$.
>
> No nontrivial real solution exists, so by Hasse-Minkowski, no nontrivial rational solution exists.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[08 - Arithmetic Geometry/Concepts/Rational Points|Rational Points]]
