---
title: "Exercise Gal41: Unnesting Five Square Roots"
topic: galois-theory
difficulty: intermediate
status: not-started
tags: [exercise, galois-theory, nested-radicals]
source: "Michael Artin, Algebra, 2nd ed., Ch. 16, Section 9, Ex. 9.8, printed p. 508, PDF p. 520"
created: 2026-08-12
---

# Exercise Gal41: Unnesting Five Square Roots

## Problem Statement

> [!question] Exercise 9.8
> Decide whether each can be expressed using unnested square roots: (a) $\sqrt{2+\sqrt{11}}$, (b) $\sqrt{10+5\sqrt2}$, (c) $\sqrt{11+6\sqrt2}$, (d) $\sqrt{6+\sqrt{11}}$, (e) $\sqrt{11+\sqrt6}$.

## Hints

> [!hint]- Hint 1
> For $\sqrt{r+\sqrt t}=\sqrt a+\sqrt b$, solve $a+b=r,\ 4ab=t$.

## Solution

> [!success]- Solution
> Rational $a,b$ exist exactly when $r^2-t$ is a rational square. Applying this:
> $$
> \begin{array}{c|c|c}
> &r^2-t&\text{result}\\\hline
> (a)&-7&\text{not unnestable over real rational square roots}\\
> (b)&50&\text{not a rational square}\\
> (c)&49&3+\sqrt2\\
> (d)&25&\sqrt{11/2}+\sqrt{1/2}\\
> (e)&115&\text{not a rational square}.
> \end{array}
> $$
> More explicitly, (c) is $3+\sqrt2$, since $(3+\sqrt2)^2=11+6\sqrt2$; and (d) is $\sqrt{11/2}+\sqrt{1/2}$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]

## Notes

The criterion and both positive identities were checked by squaring.
