---
title: "Exercise AG14: Computing Branch Points and Monodromy"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - function-fields
  - monodromy
  - computation
source: "Michael Artin, Algebra, 2nd ed., Ch. 15, Section 9, Ex. 9.5, printed p. 475, PDF p. 487"
created: 2026-08-10
---

# Exercise AG14: Computing Branch Points and Monodromy

## Problem Statement

> [!question] Exercise
> Write a computer program that determines the branch points $p_\nu$ and the permutations $\sigma_\nu$ for the Riemann surface of a given polynomial.

## Hints

> [!hint]- Hint 1
> Candidate branch points are roots of the resultant $\operatorname{Res}_x(f,f_x)$ and of the leading coefficient in $x$.

> [!hint]- Hint 2
> Label the roots at one base point and use nearest-neighbour continuation along a lollipop loop around each candidate.

## Solution

> [!success]- Solution
> The program below handles squarefree generic polynomials in $\mathbb C[t,x]$. It first finds candidate branch values exactly with a resultant, then numerically continues all roots from a common base point around each candidate. A candidate whose returned permutation is the identity is reported as a false branch point.
>
> ```python
> import itertools
> import numpy as np
> import sympy as sp
>
> t, x = sp.symbols("t x")
>
> def _match(old, new):
>     """Reorder new roots to minimize total movement from old roots."""
>     n = len(old)
>     perm = min(
>         itertools.permutations(range(n)),
>         key=lambda p: sum(abs(old[i] - new[p[i]]) for i in range(n)),
>     )
>     return np.array([new[perm[i]] for i in range(n)])
>
> def _segment(a, b, steps):
>     return np.linspace(a, b, steps, endpoint=False, dtype=complex)
>
> def branch_and_monodromy(f, steps=180):
>     poly = sp.Poly(f, x)
>     coeff_expr = poly.all_coeffs()
>     coeff_fun = [sp.lambdify(t, c, "numpy") for c in coeff_expr]
>
>     resultant = sp.resultant(f, sp.diff(f, x), x)
>     candidate_poly = sp.Poly(
>         sp.fraction(sp.together(resultant * poly.LC()))[0], t
>     )
>     candidates = np.array(
>         [complex(z) for z in sp.nroots(candidate_poly)], dtype=complex
>     )
>     # Merge repeated numerical copies of the same branch value.
>     branch = []
>     for z in candidates:
>         if not any(abs(z - w) < 1e-8 for w in branch):
>             branch.append(z)
>     branch = np.array(branch, dtype=complex)
>
>     center = branch.mean() if len(branch) else 0j
>     span = max([1.0] + [abs(z - center) for z in branch])
>     base = center.real + 1j * (center.imag + 5 * span)
>
>     def roots_at(s):
>         coeff = np.array([complex(g(s)) for g in coeff_fun])
>         return np.roots(coeff)
>
>     base_roots = roots_at(base)
>     answer = []
>     for p in branch:
>         distances = [abs(p - q) for q in branch if abs(p - q) > 1e-8]
>         rho = 0.18 * (min(distances) if distances else span)
>         top = p + 1j * rho
>         high = p.real + 1j * base.imag
>
>         outward = np.concatenate([
>             _segment(base, high, steps // 3),
>             _segment(high, top, steps // 2),
>         ])
>         circle = p + rho * np.exp(
>             1j * np.linspace(np.pi / 2, np.pi / 2 + 2*np.pi, steps)
>         )
>         path = np.concatenate([outward, circle, outward[::-1], [base]])
>
>         tracked = base_roots.copy()
>         for s in path[1:]:
>             tracked = _match(tracked, roots_at(s))
>         sigma = tuple(
>             int(np.argmin(abs(base_roots - tracked[i]))) + 1
>             for i in range(len(base_roots))
>         )
>         answer.append((p, sigma))
>     return answer
>
> # Example: branch values -4 and 0, with two distinct transpositions.
> f = x**3 - 3*x**2 - t
> for p, sigma in branch_and_monodromy(f):
>     print(p, sigma)
> ```
>
> The tuple `sigma` records the image of sheets `1, ..., n`. Increasing `steps` improves continuation near close roots. The high horizontal route and vertical approach must avoid other candidates; for nongeneric configurations with aligned or very close branch points, rotate the $t$-coordinate slightly or replace the approach path by a collision-free polygonal path.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy|Branch Points and Monodromy]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

This implements the continuation procedure described in S1 on printed p. 468, PDF p. 480. The resultant gives exact candidates; numerical root tracking gives computational verification of permutations, not a symbolic proof for every input. Multiple roots, singular curves, near-colliding branch values, and nonpolynomial coefficients require higher precision or certified continuation.
