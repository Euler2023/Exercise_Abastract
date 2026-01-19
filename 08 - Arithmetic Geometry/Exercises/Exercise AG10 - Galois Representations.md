---
title: "Exercise AG10: Galois Representations"
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
  - exercise
  - arithmetic-geometry
  - galois-representations
source: "Advanced arithmetic geometry"
created: 2026-01-19
---

# Exercise AG10: Galois Representations

## Problem Statement

> [!question]
> Let $E: y^2 = x^3 - x^2 - x + 1$ be an elliptic curve over $\mathbb{Q}$.
>
> **(a)** The $n$-torsion $E[n]$ is a $\text{Gal}(\bar{\mathbb{Q}}/\mathbb{Q})$-module.
> Explain why $E[n] \cong (\mathbb{Z}/n\mathbb{Z})^2$ as an abelian group (for $n$ coprime to the characteristic).
>
> **(b)** This gives a **mod $n$ Galois representation**:
> $$\bar{\rho}_{E,n}: \text{Gal}(\bar{\mathbb{Q}}/\mathbb{Q}) \to \text{GL}_2(\mathbb{Z}/n\mathbb{Z})$$
> For $n = 2$, describe $E[2]$ explicitly and determine the image of $\bar{\rho}_{E,2}$.
>
> **(c)** The $\ell$-adic Tate module is $T_\ell(E) = \varprojlim E[\ell^n]$.
> Show that $T_\ell(E) \cong \mathbb{Z}_\ell^2$ as a $\mathbb{Z}_\ell$-module.
>
> **(d)** State the relationship between $\det(\rho_{E,\ell})$ and the $\ell$-adic cyclotomic character $\chi_\ell$.

## Hints

> [!hint]- Hint 1
> For (a): Use the structure theorem for finite abelian groups and the Weil pairing.

> [!hint]- Hint 2
> For (b): Find the 2-torsion by solving $2P = \mathcal{O}$, which means finding points with $y = 0$.

> [!hint]- Hint 3
> For (d): The Weil pairing $e_n: E[n] \times E[n] \to \mu_n$ is Galois-equivariant.

## Solution

> [!success]- Solution
>
> **(a)** For an elliptic curve over an algebraically closed field (in characteristic 0 or coprime to $n$):
>
> The multiplication-by-$n$ map $[n]: E \to E$ has degree $n^2$ and is separable.
>
> So $\#E[n] = n^2$ and $E[n]$ is killed by $n$.
>
> By the structure theorem: $E[n] \cong \mathbb{Z}/d_1\mathbb{Z} \times \mathbb{Z}/d_2\mathbb{Z}$ where $d_1 | d_2$ and $d_1 d_2 = n^2$.
>
> The **Weil pairing** $e_n: E[n] \times E[n] \to \mu_n$ is non-degenerate and alternating.
>
> Non-degeneracy forces $d_1 = d_2 = n$, so:
> $$E[n] \cong (\mathbb{Z}/n\mathbb{Z})^2$$
>
> **(b)** For $E: y^2 = x^3 - x^2 - x + 1$:
>
> 2-torsion points have $y = 0$, so solve:
> $$x^3 - x^2 - x + 1 = 0$$
> $$(x-1)(x^2 - 1) = (x-1)^2(x+1) = 0$$
>
> Wait, let me factor properly:
> $x^3 - x^2 - x + 1 = x^2(x-1) - (x-1) = (x^2-1)(x-1) = (x-1)(x-1)(x+1) = (x-1)^2(x+1)$
>
> Roots: $x = 1$ (double), $x = -1$.
>
> So 2-torsion points: $(1, 0)$ and $(-1, 0)$ plus $\mathcal{O}$.
>
> But this only gives 3 points! For full 2-torsion we need 4.
>
> The issue: $(1, 0)$ is a singular point candidate. Let me check the discriminant...
>
> Actually this curve might be singular. Let $f(x) = x^3 - x^2 - x + 1$.
> $f'(x) = 3x^2 - 2x - 1 = (3x+1)(x-1)$
>
> At $x = 1$: $f(1) = 1 - 1 - 1 + 1 = 0$ and $f'(1) = 0$.
>
> So this curve has a **node** at $(1, 0)$ — it's not an elliptic curve!
>
> **Corrected curve**: Let's use $E: y^2 = x^3 - x^2 + x - 1$.
>
> $f(x) = x^3 - x^2 + x - 1 = (x-1)(x^2 + 1)$
>
> Roots: $x = 1$ (real), $x = \pm i$ (complex).
>
> 2-torsion over $\bar{\mathbb{Q}}$: $(1, 0), (i, 0), (-i, 0), \mathcal{O}$.
>
> Over $\mathbb{Q}$: only $(1, 0)$ is rational.
>
> The representation $\bar{\rho}_{E,2}$ acts on $E[2] \cong (\mathbb{Z}/2\mathbb{Z})^2$.
>
> $\text{Gal}(\bar{\mathbb{Q}}/\mathbb{Q})$ acts by permuting $\{(i, 0), (-i, 0)\}$ (complex conjugation swaps them).
>
> In a basis $\{(1,0), (i,0)\}$:
> - Complex conjugation $\sigma$: $(1,0) \mapsto (1,0)$, $(i,0) \mapsto (-i,0) = (1,0) + (i,0)$
>
> So $\sigma \mapsto \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ in $\text{GL}_2(\mathbb{Z}/2\mathbb{Z})$.
>
> Image of $\bar{\rho}_{E,2}$: a subgroup containing this element.
>
> **(c)** The inverse limit:
> $$T_\ell(E) = \varprojlim_n E[\ell^n]$$
>
> where the maps are $E[\ell^{n+1}] \xrightarrow{[\ell]} E[\ell^n]$.
>
> Since $E[\ell^n] \cong (\mathbb{Z}/\ell^n\mathbb{Z})^2$, and the maps are surjective:
> $$T_\ell(E) \cong \varprojlim (\mathbb{Z}/\ell^n\mathbb{Z})^2 \cong (\varprojlim \mathbb{Z}/\ell^n\mathbb{Z})^2 = \mathbb{Z}_\ell^2$$
>
> **(d)** The Weil pairing satisfies:
> $$e_{\ell^n}(\sigma P, \sigma Q) = \sigma(e_{\ell^n}(P, Q)) = e_{\ell^n}(P, Q)^{\chi_\ell(\sigma)}$$
>
> where $\chi_\ell: \text{Gal}(\bar{\mathbb{Q}}/\mathbb{Q}) \to \mathbb{Z}_\ell^\times$ is the cyclotomic character.
>
> Taking determinants:
> $$\det(\rho_{E,\ell}) = \chi_\ell$$
>
> This is the **Weil pairing relation**: the determinant of the $\ell$-adic representation equals the cyclotomic character.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Galois Representations|Galois Representations]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves Arithmetic]]
- [[08 - Arithmetic Geometry/Concepts/Etale Cohomology|Étale Cohomology]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
