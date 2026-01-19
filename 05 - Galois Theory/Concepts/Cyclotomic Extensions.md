---
title: Cyclotomic Extensions
topic: galois-theory
tags:
  - concept
  - definition
  - galois-theory
created: 2026-01-19
---

# Cyclotomic Extensions

## Definition

> [!info] Definition (Roots of Unity)
> The **$n$-th roots of unity** are the complex solutions to $x^n = 1$:
> $$\zeta_n^k = e^{2\pi i k/n} \quad \text{for } k = 0, 1, \ldots, n-1$$
>
> A **primitive $n$-th root of unity** is $\zeta_n = e^{2\pi i/n}$, which generates all $n$-th roots.

> [!info] Definition (Cyclotomic Extension)
> The **$n$-th cyclotomic extension** of $\mathbb{Q}$ is:
> $$\mathbb{Q}(\zeta_n) = \mathbb{Q}(e^{2\pi i/n})$$
>
> This is the splitting field of $x^n - 1$ over $\mathbb{Q}$.

## The Cyclotomic Polynomial

> [!info] Definition (Cyclotomic Polynomial)
> The **$n$-th cyclotomic polynomial** $\Phi_n(x)$ is the minimal polynomial of $\zeta_n$ over $\mathbb{Q}$:
> $$\Phi_n(x) = \prod_{\substack{1 \leq k \leq n \\ \gcd(k,n) = 1}} (x - \zeta_n^k)$$
>
> Equivalently:
> $$x^n - 1 = \prod_{d | n} \Phi_d(x)$$

## Key Properties

1. **Degree**: $[\mathbb{Q}(\zeta_n):\mathbb{Q}] = \phi(n)$ (Euler's totient function)
2. **Galois extension**: $\mathbb{Q}(\zeta_n)/\mathbb{Q}$ is always Galois
3. **Irreducibility**: $\Phi_n(x) \in \mathbb{Z}[x]$ is irreducible over $\mathbb{Q}$
4. **Integer coefficients**: $\Phi_n(x)$ has integer coefficients
5. **Containment**: $\mathbb{Q}(\zeta_m) \subseteq \mathbb{Q}(\zeta_n)$ iff $m | n$

## The Galois Group

> [!abstract] Main Theorem
> $$\text{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q}) \cong (\mathbb{Z}/n\mathbb{Z})^*$$
>
> The isomorphism is given by:
> $$\sigma_k \leftrightarrow k \pmod{n}$$
> where $\sigma_k: \zeta_n \mapsto \zeta_n^k$ for $\gcd(k, n) = 1$.

> [!tip] Structure of $(\mathbb{Z}/n\mathbb{Z})^*$
> - Order: $|(\mathbb{Z}/n\mathbb{Z})^*| = \phi(n)$
> - For prime $p$: $(\mathbb{Z}/p\mathbb{Z})^* \cong \mathbb{Z}/(p-1)\mathbb{Z}$ (cyclic)
> - For prime power: $(\mathbb{Z}/p^k\mathbb{Z})^* \cong \mathbb{Z}/p^{k-1}(p-1)\mathbb{Z}$ (cyclic for odd $p$)
> - General: Use Chinese Remainder Theorem

## Examples of Cyclotomic Polynomials

> [!example] Small Cyclotomic Polynomials
> | $n$ | $\Phi_n(x)$ | $\phi(n)$ |
> |-----|-------------|-----------|
> | 1 | $x - 1$ | 1 |
> | 2 | $x + 1$ | 1 |
> | 3 | $x^2 + x + 1$ | 2 |
> | 4 | $x^2 + 1$ | 2 |
> | 5 | $x^4 + x^3 + x^2 + x + 1$ | 4 |
> | 6 | $x^2 - x + 1$ | 2 |
> | 8 | $x^4 + 1$ | 4 |
> | 12 | $x^4 - x^2 + 1$ | 4 |

> [!example] Example: $\mathbb{Q}(\zeta_3)/\mathbb{Q}$
> - $\zeta_3 = e^{2\pi i/3} = \frac{-1 + \sqrt{-3}}{2}$
> - $\Phi_3(x) = x^2 + x + 1$
> - $[\mathbb{Q}(\zeta_3):\mathbb{Q}] = 2$
> - $\mathbb{Q}(\zeta_3) = \mathbb{Q}(\sqrt{-3})$
> - $\text{Gal} \cong (\mathbb{Z}/3\mathbb{Z})^* \cong \mathbb{Z}/2\mathbb{Z}$

> [!example] Example: $\mathbb{Q}(\zeta_5)/\mathbb{Q}$
> - $[\mathbb{Q}(\zeta_5):\mathbb{Q}] = 4$
> - $\text{Gal} \cong (\mathbb{Z}/5\mathbb{Z})^* \cong \mathbb{Z}/4\mathbb{Z}$ (cyclic)
> - Intermediate fields: $\mathbb{Q} \subset \mathbb{Q}(\sqrt{5}) \subset \mathbb{Q}(\zeta_5)$
> - $\mathbb{Q}(\sqrt{5})$ is the unique quadratic subfield

> [!example] Example: $\mathbb{Q}(\zeta_8)/\mathbb{Q}$
> - $\zeta_8 = e^{\pi i/4} = \frac{1+i}{\sqrt{2}}$
> - $[\mathbb{Q}(\zeta_8):\mathbb{Q}] = 4$
> - $\text{Gal} \cong (\mathbb{Z}/8\mathbb{Z})^* \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$ (Klein four-group)
> - Subfields: $\mathbb{Q}(i)$, $\mathbb{Q}(\sqrt{2})$, $\mathbb{Q}(\sqrt{-2})$

## Applications

> [!abstract] Constructible Regular Polygons
> A regular $n$-gon is constructible by ruler and compass iff $\phi(n)$ is a power of 2.
>
> This happens iff $n = 2^k p_1 \cdots p_m$ where each $p_i$ is a distinct Fermat prime.

> [!abstract] Kronecker-Weber Theorem
> Every abelian extension of $\mathbb{Q}$ is contained in some cyclotomic field $\mathbb{Q}(\zeta_n)$.
>
> In particular: $\mathbb{Q}(\sqrt{d}) \subseteq \mathbb{Q}(\zeta_n)$ for suitable $n$.

## Galois Correspondence for Cyclotomic Fields

> [!info] Subfields of $\mathbb{Q}(\zeta_n)$
> Since $\text{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q}) \cong (\mathbb{Z}/n\mathbb{Z})^*$:
>
> - Subgroups correspond to subfields
> - For $H \leq (\mathbb{Z}/n\mathbb{Z})^*$: the fixed field $\mathbb{Q}(\zeta_n)^H$ has degree $[(\mathbb{Z}/n\mathbb{Z})^*:H]$
> - Abelian group theory determines all intermediate fields

## Computing with Cyclotomic Fields

> [!tip] Useful Identities
> - $\zeta_n + \zeta_n^{-1} = 2\cos(2\pi/n)$
> - $\zeta_n - \zeta_n^{-1} = 2i\sin(2\pi/n)$
> - $1 + \zeta_n + \zeta_n^2 + \cdots + \zeta_n^{n-1} = 0$
> - $\mathbb{Q}(\zeta_n + \zeta_n^{-1})$ is the maximal real subfield

## Related Concepts

- [[05 - Galois Theory/Concepts/Galois Group|Galois Group]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[05 - Galois Theory/Concepts/Ruler and Compass|Ruler and Compass Constructions]]
- [[05 - Galois Theory/Concepts/Solvability by Radicals|Solvability by Radicals]]

## Exercises

```dataview
LIST
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```
