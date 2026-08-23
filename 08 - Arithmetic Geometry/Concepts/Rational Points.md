---
title: Rational Points
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
created: 2026-01-19
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VI, §14, printed p. 314, PDF p. 329; Ch. IX, §2, printed pp. 386–387, PDF pp. 401–402; Jürgen Neukirch, Algebraic Number Theory, Ch. III, §1, printed p. 207, PDF p. 226"
source_status: partially-verified
status: not-started
---

# Rational Points

## Definition

> [!info] Definition (Rational Points)
> For a variety $X$ defined over a field $K$, the **$K$-rational points** are:
> $$
> X(K) = \{P \in X : P \text{ has coordinates in } K\}
> $$

When $K = \mathbb{Q}$, these are simply called **rational points**.

## The Central Problem

> [!question] Fundamental Questions
> For a variety $X/\mathbb{Q}$:
> 1. **Existence**: Is $X(\mathbb{Q}) \neq \emptyset$?
> 2. **Finiteness**: Is $X(\mathbb{Q})$ finite?
> 3. **Structure**: What is the structure of $X(\mathbb{Q})$?
> 4. **Computation**: Can we find all elements of $X(\mathbb{Q})$?

## Behavior by Dimension and Genus

### Curves (Dimension 1)

| Genus | $X(\mathbb{Q})$ | Example |
|-------|-----------------|---------|
| $g = 0$ | For a smooth projective geometrically integral curve: empty, or $\cong \mathbb{P}^1(\mathbb Q)$ after choosing a rational point | Conics |
| $g = 1$ | After choosing a rational point, it is an elliptic curve; its rational points form a finitely generated group | Elliptic curves |
| $g \geq 2$ | **Finite** (Faltings) | $x^n + y^n = 1$, $n \geq 4$ |

### Higher Dimension

Much less is known! Rational points on surfaces and higher-dimensional varieties remain mysterious.

## Examples

> [!example] Example 1: Circle $x^2 + y^2 = 1$
> Parametrization via stereographic projection from $(-1, 0)$:
> $$
> (x, y) = \left(\frac{1-t^2}{1+t^2}, \frac{2t}{1+t^2}\right), \quad t \in \mathbb{Q} \cup \{\infty\}
> $$
> So $X(\mathbb{Q})$ is infinite (and we can list all points!).

> [!example] Example 2: $x^2 + y^2 = 3$
> There are no rational points. Indeed, write a hypothetical solution as $x=a/c$, $y=b/c$ with $\gcd(a,b,c)=1$. Then $a^2+b^2=3c^2$. Modulo $3$, this forces $3\mid a$ and $3\mid b$, and then the equation forces $3\mid c$, a contradiction.

> [!example] Example 3: Fermat curves $x^n + y^n = z^n$
> - $n = 2$: infinitely many (Pythagorean triples)
> - $n \geq 3$: only trivial solutions (Fermat's Last Theorem)

> [!example] Example 4: Elliptic curve $E: y^2 = x^3 - x$
> $E(\mathbb{Q}) \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$
> Points: $\mathcal{O}, (0,0), (1,0), (-1,0)$

## Density and Distribution

> [!info] Definition (Zariski Density)
> $X(K)$ is **Zariski dense** in $X$ if every polynomial vanishing on $X(K)$ vanishes on all of $X$.

For curves of genus $\geq 2$, $X(\mathbb{Q})$ is finite, so never Zariski dense.

## Counting Rational Points

> [!info] Definition (Counting Function)
> For $X \subset \mathbb{P}^n$:
> $$
> N(X, B) = \#\{P \in X(\mathbb{Q}) : H(P) \leq B\}
> $$
> where $H$ is the [[08 - Arithmetic Geometry/Concepts/Heights|height]].

> [!abstract] Manin's Conjecture
> For "nice" Fano varieties $X$:
> $$
> N(X, B) \sim c \cdot B^a (\log B)^{b-1}
> $$
> for explicit $a, b, c$ depending on the geometry of $X$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski Topology]]
- [[08 - Arithmetic Geometry/Concepts/Heights|Heights]]
- [[08 - Arithmetic Geometry/Concepts/Local-Global Principles|Local-Global Principles]]
- [[08 - Arithmetic Geometry/Concepts/Mordell-Weil Theorem|Mordell-Weil Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Faltings Theorem|Faltings' Theorem]]
- [[08 - Arithmetic Geometry/Concepts/Diophantine Equations|Diophantine Equations]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Lang defines $E(K)$ as the rational-point group of an elliptic curve over a field extension and treats field-valued points of affine schemes; Neukirch explicitly states the Mordell–Faltings finiteness theorem for curves of genus at least $2$. This supports the coordinate/functorial viewpoint and the genus-$\geq2$ finiteness boundary. The “Faltings finiteness theorem” near printed p. 176 of Lang's *Algebraic Number Theory* concerns semisimple $\ell$-adic representations and is deliberately not used as a rational-point source. Mordell–Weil finite generation, height counting, Manin's conjecture, Zariski-density claims, and the worked examples are not all proved in these slices. The genus-$0$ row and the invalid mod-$4$ argument for $x^2+y^2=3$ have been corrected.
