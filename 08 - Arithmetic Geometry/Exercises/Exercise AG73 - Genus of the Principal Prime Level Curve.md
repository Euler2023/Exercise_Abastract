---
title: "Exercise AG73: Genus of the Principal Prime Level Curve"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.1, Exercise 3.1.6, printed p. 71, PDF p. 85"
source_refs:
  - "S7/ch-3/sec-1/ex-6"
created: 2026-10-28
---

# Exercise AG73: Genus of the Principal Prime Level Curve

## Problem Statement

> [!question] Original Exercise 3.1.6
> Let $p$ be prime and let $X(p)=\Gamma(p)\backslash\mathcal H^*$. Compute the genus of $X(p)$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Use the order $p(p^2-1)$ of $SL_2(\mathbb F_p)$, dividing by two only for $p>2$.

> [!hint]- Hint 2
> Every cusp has width $p$. There are no effective elliptic points for $\Gamma(p)$, including at $p=2$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> We use Theorem 3.1.1,
> $$
> g=1+\frac d{12}-\frac{\varepsilon_2}4-\frac{\varepsilon_3}3-\frac{\varepsilon_\infty}2.
> $$
> Reduction onto $SL_2(\mathbb F_p)$ is surjective with kernel $\Gamma(p)$, and that finite group has order $p(p^2-1)$: choose a nonzero first column and then one of $p$ second columns of determinant $1$. When $p>2$, $-I\notin\Gamma(p)$ and the effective index is
> $$
> d=\frac{p(p^2-1)}2.
> $$
> For $p=2$, $-I\in\Gamma(2)$ and $d=6$.
>
> For completeness, there are no effective elliptic points. A nonidentity transformation fixing a point in $\mathcal H$ has integral trace in $\{-1,0,1\}$. If $\gamma=I+pA\in\Gamma(p)$, expansion of its determinant gives
> $$
> 1=1+p\operatorname{tr}A+p^2\det A,\qquad
> \operatorname{tr}\gamma=2-p^2\det A\equiv2\pmod{p^2}.
> $$
> For $p\ge2$ this congruence excludes each of $-1,0,1$. Therefore $\varepsilon_2=\varepsilon_3=0$.
>
> At $\infty$, a translation $T^n$ represents an element of $\{\pm I\}\Gamma(p)$ exactly when $p\mid n$. Thus its width is $p$. Since $\Gamma(p)$ is normal in $SL_2(\mathbb Z)$ and that group is transitive on cusp representatives, all widths are $p$. The local degrees over the sole cusp of $X(1)$ sum to $d$, so
> $$
> \varepsilon_\infty=d/p.
> $$
> Substitution yields, for $p>2$,
> $$
> g(X(p))=1+\frac{p(p^2-1)}{24}-\frac{p^2-1}{4}
> =\frac{(p+2)(p-3)(p-5)}{24}.
> $$
> For $p=2$, it gives $g=1+6/12-3/2=0$. As checks, $X(3)$ and $X(5)$ have genus $0$, and $X(7)$ has genus $3$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 71 / PDF 85. The solution above is independently derived.
- **Imported inputs:** Reduction surjectivity is Exercise 1.2.2. The trace bound is Exercise 2.3.2, printed p. 56 / PDF p. 71, independently proved in Exercise LA580. The genus formula is Theorem 3.1.1; all substitutions, cusp counts and exceptional prime cases are shown above.
- **Routing:** The principal toolkit is arithmetic-geometry; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
