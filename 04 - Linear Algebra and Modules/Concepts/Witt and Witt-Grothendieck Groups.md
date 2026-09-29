---
title: Witt and Witt-Grothendieck Groups
aliases:
  - Witt Group
  - Witt-Grothendieck Group
  - Grothendieck-Witt Group
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - bilinear-forms
  - witt-groups
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, §§10–11, printed pp. 589–595, PDF pp. 604–610"
source_status: verified
status: not-started
created: 2026-09-29
---

# Witt and Witt-Grothendieck Groups

Throughout this note, $k$ is a field with $\operatorname{char}k\ne2$, and all forms are finite-dimensional symmetric bilinear forms. Orthogonal sum is denoted by $\perp$. These groups concern symmetric forms; the alternating-form extension theorem is a separate result.

## Definitions

> [!info] Anisotropic and hyperbolic forms
> A form $a$ is **anisotropic** if $a(v,v)=0$ implies $v=0$. Lang calls this “definite”; no ordering of $k$ is assumed. The **hyperbolic plane** $H$ is the form with Gram matrix $\begin{pmatrix}0&1\\1&0\end{pmatrix}$, equivalently $\langle1,-1\rangle$. A hyperbolic form is an orthogonal sum of copies of $H$.

The Witt decomposition theorem writes every symmetric form as

$$
g\simeq 0_r\perp H^{\perp s}\perp a,
$$

where $0_r$ is the zero form on its radical, $a$ is anisotropic, and all three summands are unique up to isometry. The zero-dimensional form is allowed. The notation $0_r$ records a radical of dimension $r$, not a nondegenerate form of positive dimension.

> [!info] Witt group
> Two symmetric forms are **Witt equivalent** if their anisotropic parts are isometric. The resulting classes form the **Witt group** $W(k)$ under orthogonal sum. The class of $g$ is written $[g]_W$; hyperbolic forms and zero forms represent $0$, and $-[g]_W=[-g]_W$.

> [!info] Witt-Grothendieck group
> Let $M(k)$ be the commutative monoid of isometry classes of **nondegenerate** symmetric forms under orthogonal sum. Its group completion is the **Witt-Grothendieck group** $WG(k)$, also often denoted $GW(k)$. Its elements are formal differences $[g]_G-[h]_G$. Two pairs represent the same element exactly when there is a nondegenerate form $t$ such that $g\perp h'\perp t\simeq g'\perp h\perp t$.

## Intuition

$WG(k)$ permits subtraction of actual forms while retaining their dimension and hyperbolic contribution. Passing to $W(k)$ forgets hyperbolic planes and retains the anisotropic content. Thus the zero class in $W(k)$ may be represented by a large hyperbolic space, while that space has a nonzero class in $WG(k)$ detected by its dimension.

## Key Properties

1. **Actual forms embed in $WG(k)$.** Witt cancellation makes $M(k)$ cancellative, so its canonical map to the group completion is injective.
2. **Dimension:** $\dim([g]_G-[h]_G)=\dim g-\dim h$ defines $WG(k)\to\mathbb Z$. It splits by $n\mapsto n[\langle1\rangle]_G$.
3. **Witt quotient:** The map $\pi([g]_G-[h]_G)=[g]_W-[h]_W$ is onto and has kernel $\mathbb Z[H]_G$. Consequently

$$
W(k)\simeq WG(k)/\mathbb Z[H]_G.
$$

4. **Square-class generators:** With $\langle a\rangle$ denoting the line of Gram matrix $(a)$, there is a surjection of additive groups

$$
\mathbb Z[k^*/k^{*2}]\longrightarrow WG(k),\qquad
e_{\bar a}\longmapsto[\langle a\rangle]_G.
$$

5. **Determinant modulo squares:** Basis change multiplies a Gram determinant by a square, so

$$
\det([g]_G-[h]_G)=\det(g)\det(h)^{-1}
\quad\text{in }k^*/k^{*2}
$$

is well-defined. This ordinary determinant invariant need not descend to $W(k)$: $H$ becomes zero there but has determinant class $-1$.

For the group inverse in $W(k)$, diagonalize $g$ and observe that every pair $\langle a,-a\rangle$ is a hyperbolic plane. Hence $g\perp(-g)$ is hyperbolic. For the kernel in property 3, forms with equal Witt class have decompositions $H^{\perp r}\perp a$ and $H^{\perp s}\perp a$, so their formal difference is $(r-s)[H]_G$. Property 4 follows from an orthogonal basis and the isometry $\langle au^2\rangle\simeq\langle a\rangle$. These arguments explain why both definitions are compatible.

## Examples

> [!example] Over the real numbers
> Sylvester's law classifies a nondegenerate real symmetric form by its numbers $(p,q)$ of positive and negative squares. Therefore $WG(\mathbb R)\simeq\mathbb Z^2$, a hyperbolic plane represents $(1,1)$, and $W(\mathbb R)\simeq\mathbb Z$ via the signature $p-q$.

> [!example] Over an algebraically closed field of characteristic different from $2$
> Every nonzero scalar is a square, so diagonalization makes each nondegenerate form an orthogonal sum of copies of $\langle1\rangle$. Hence $WG(k)\simeq\mathbb Z$ by dimension. Since $H$ is a two-dimensional form, $W(k)\simeq\mathbb Z/2\mathbb Z$.

> [!warning] Negating a form and subtracting its class
> In $WG(k)$, $[-g]_G$ generally differs from $-[g]_G$: indeed $[g]_G+[-g]_G=(\dim g)[H]_G$. Only after passing to $W(k)$ do they become additive inverses. Characteristic $2$ requires a separate treatment of symmetric bilinear and quadratic forms and is outside this note's hypotheses.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules and Grothendieck Groups]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- The characteristic assumption and hyperbolic-plane definition are in [S2, Ch. XV, §10, printed pp. 589–590, PDF pp. 604–605]; cancellation and Witt decomposition are Corollaries 10.6–10.7, printed pp. 593–594 / PDF pp. 608–609. These source pages were inspected directly.
- The definitions of $W(k)$, $M(k)$, and $WG(k)$, Theorem 11.1, and the dimension and determinant maps were checked in [S2, Ch. XV, §11, printed pp. 594–595, PDF pp. 609–610]. These are source results; the explanatory kernel and generator arguments here are independent deductions.
- The real example imports Sylvester's law of inertia. The algebraically closed example follows from orthogonal diagonalization and the existence of square roots. This note does not claim to classify anisotropic forms over general fields.
