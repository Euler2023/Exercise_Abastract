---
title: Fundamental Domain
topic: modular-forms
tags:
  - concept
  - definition
  - modular-forms
created: 2026-01-19
source: "Claus Sorensen, From Classical L-Functions to Modern Reciprocity Laws, Ch. 5, §5.3, printed pp. 190–192, PDF pp. 199–201"
source_status: partially-verified
status: not-started
---

# Fundamental Domain

## Definition

> [!info] Definition (Fundamental Domain)
> A **fundamental domain** for the action of the [[07 - Modular Forms/Concepts/Modular Group|modular group]] $\Gamma = \text{PSL}_2(\mathbb{Z})$ on $\mathbb{H}$ is a connected region $\mathcal{F} \subset \mathbb{H}$ such that:
> 1. Every $\tau \in \mathbb{H}$ is $\Gamma$-equivalent to some point in $\overline{\mathcal{F}}$
> 2. No two interior points of $\mathcal{F}$ are $\Gamma$-equivalent

## Standard Fundamental Domain

> [!info] Definition (Standard Fundamental Domain)
> The standard fundamental domain for $\text{PSL}_2(\mathbb{Z})$ is:
> $$
> \mathcal{F} = \left\{ \tau \in \mathbb{H} : |\tau| > 1, \, -\frac{1}{2} < \text{Re}(\tau) < \frac{1}{2} \right\}
> $$
> with appropriate boundary identifications.

```
        Im
         |
         |     /\
         |    /  \
         |   /    \
         |  /  𝓕   \
         | /        \
    -----+-----+-----+----- Re
        -1/2   0   1/2
              |
         |τ| = 1
```

## Boundary Identifications

The boundary of $\mathcal{F}$ is identified as follows:
- Left edge ($\text{Re}(\tau) = -1/2$) $\sim$ Right edge ($\text{Re}(\tau) = 1/2$) via $T$
- Left arc ($|\tau| = 1$, $-1/2 \leq \text{Re}(\tau) \leq 0$) $\sim$ Right arc via $S$

## Special Points

> [!tip] Elliptic Points
> - $i$ has stabilizer of order 2 (fixed by $S$)
> - $\rho = e^{2\pi i/3}$ has stabilizer of order 3 (fixed by $ST$)
> - The other boundary representative is $\rho+1=e^{\pi i/3}=-\bar\rho$, which is $T$-equivalent to $\rho$. By contrast, $\rho^2=e^{4\pi i/3}=\bar\rho$ lies in the lower half-plane and is not a point of $\mathbb H$.

## Cusps

> [!info] Definition (Cusp)
> A **cusp** of $\Gamma$ is a $\Gamma$-equivalence class in $\mathbb{Q} \cup \{i\infty\}$.

For $\text{PSL}_2(\mathbb{Z})$, there is only **one cusp**: all rational points and $i\infty$ are equivalent.

> [!example] Cusp Equivalence
> $0 = S \cdot i\infty$ and $1 = T \cdot 0$, so $0 \sim 1 \sim i\infty$.

## Compactification

> [!info] Definition (Extended Upper Half-Plane)
> $$
> \mathbb{H}^* = \mathbb{H} \cup \mathbb{Q} \cup \{i\infty\}
> $$
> The quotient $\mathbb{H}^* / \Gamma$ is a compact Riemann surface.

For $\text{PSL}_2(\mathbb{Z})$:
$$
\mathbb{H}^* / \text{PSL}_2(\mathbb{Z}) \cong \mathbb{P}^1(\mathbb{C})
$$
(the Riemann sphere, via the [[07 - Modular Forms/Concepts/j-Invariant|j-invariant]])

## Key Properties

1. $\mathcal{F}$ has hyperbolic area $\pi/3$
2. The quotient $\mathbb{H}/\Gamma$ has genus 0
3. The action is properly discontinuous modulo finite stabilizers: for compact $A,B\subset\mathbb H$, only finitely many $\gamma\in\Gamma$ satisfy $A\cap\gamma B\ne\varnothing$

## Examples

> [!example] Example 1: Finding the equivalent point
> For $\tau = 2 + i$, apply $T^{-2}$: $T^{-2} \cdot (2+i) = i \in \mathcal{F}$.

> [!example] Example 2: Point on boundary
> $\tau = i$ lies on the boundary arc $|\tau| = 1$.

> [!example] Example 3: Reduction algorithm
> To reduce $\tau \in \mathbb{H}$ to $\mathcal{F}$:
> 1. Apply $T^n$ to get $-1/2 \leq \text{Re}(\tau) < 1/2$
> 2. If $|\tau| < 1$, apply $S$
> 3. Repeat until $|\tau| \geq 1$

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/j-Invariant|j-Invariant]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Sorensen gives the closed standard region $\mathcal F=\{z\in\mathbb H:|z|\ge 1,\ |\operatorname{Re}z|\le \tfrac12\}$, locates the elliptic points $i$ and $\omega$ on its boundary, defines cusps as $\Gamma$-orbits in $\mathbb P^1(\mathbb Q)$, proves that $\mathrm{SL}_2(\mathbb Z)$ has one cusp, and constructs the compactification by adjoining cusps. This directly verifies the core domain/cusp picture. Sorensen refers the proof that this region is a fundamental domain to Serre; the exact boundary-identification theorem, hyperbolic area $\pi/3$, genus-$0$ assertion, and identification with $\mathbb P^1(\mathbb C)$ via $j$ are not proved in the checked pages. The note is therefore `partially-verified`, not fully verified.
