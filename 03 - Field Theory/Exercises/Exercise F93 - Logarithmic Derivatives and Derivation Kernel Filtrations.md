---
title: "Exercise F93: Logarithmic Derivatives and Derivation Kernel Filtrations"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - derivations-and-differentials
  - differential-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VIII, printed p. 375, PDF p. 390, Exercise 8"
created: 2026-09-15
---

# Exercise F93: Logarithmic Derivatives and Derivation Kernel Filtrations

## Problem Statement

> [!question]
> Let $D$ be a derivation of a field $K$. Then $D^n : K \to K$ is a linear map. Let $P_n = \operatorname{Ker} D^n$, so $P_n$ is an additive subgroup of $K$. An element $x \in K$ is called a **logarithmic derivative** (in $K$) if there exists $y \in K$ such that $x = Dy/y$. Prove:
> 
> (a) An element $x \in K$ is the logarithmic derivative of an element $y \in P_n$ but $y \notin P_{n-1}$ ($n > 0$) if and only if
> $$
> (D + x)^n(1) = 0 \quad \text{and} \quad (D + x)^{n-1}(1) \neq 0.
> $$
> 
> (b) Assume that $K = \bigcup_{n \ge 1} P_n$, i.e. given $x \in K$ then $x \in P_n$ for some $n > 0$. Let $F$ be a subfield of $K$ such that $DF \subset F$. Prove that $x$ is a logarithmic derivative in $F$ if and only if $x$ is a logarithmic derivative in $K$. [Hint: If $x = Dy/y$ then $(D + x) = y^{-1} D \circ y$ and conversely.]

## Source Clarifications

> [!note] Scalar field and the variable in part (b)
> The word “linear” means linear over the constant field $\ker D$, not generally over $K$. In the logarithmic derivative $Dy/y$, the denominator requires $y\ne0$. Part (b) implicitly concerns $x\in F$; the printed statement omits this restriction, so the proof states it explicitly. Without it the literal assertion is false: for $K=\mathbb F_p(t)$, $D=d/dt$, $F=\mathbb F_p$, the element $1/t=D(t)/t$ is a logarithmic derivative in $K$ but not in $F$, while $D^p=0$ and hence $K=P_p$.

## Hints

> [!hint]- Hint 1: The operator conjugation identity
> For any $y \in K^\times$ and $f \in K$, compute $y^{-1} D(yf)$ using the Leibniz rule $D(yf) = y D(f) + f D(y)$. Verify that $y^{-1} D(yf) = (D + x)(f)$ when $x = Dy/y$.

> [!hint]- Hint 2: Iterating the conjugate operator
> Deduce by induction that $(D + x)^k(f) = y^{-1} D^k(yf)$ for all $k \ge 1$. What does this yield when applied to $f = 1$?

> [!hint]- Hint 3: Descending to the subfield $F$
> For part (b), if $x \in F$ and $x = Dy/y$ with $y \in K$, consider the element $z = (D + x)^{n-1}(1)$. Explain why $z \in F$, and show that $(D + x)(z) = 0$, leading to $x = -Dz/z = D(z^{-1}) / z^{-1}$.

## Solution

> [!success]-
> ### Part (a): Characterization of Logarithmic Derivatives via $(D + x)$
> 
> 1. **The operator identity**:
>    Let $y \in K^\times$, and let $x = \frac{Dy}{y}$.
>    For any element $f \in K$, applying the derivation $D$ to the product $yf$:
>    $$
>    D(yf) = y D(f) + f D(y).
>    $$
>    Multiplying by $y^{-1}$:
>    $$
>    y^{-1} D(yf) = D(f) + \frac{D(y)}{y} f = D(f) + xf = (D + x)(f).
>    $$
>    Hence, as additive endomorphisms of $K$, we have the conjugation identity:
>    $$
>    D + x = y^{-1} \circ D \circ y.
>    $$
> 
> 2. **Powers of the operator**:
>    Composing this operator $k$ times:
>    $$
>    (D + x)^k = \underbrace{(y^{-1} \circ D \circ y) \circ (y^{-1} \circ D \circ y) \circ \cdots \circ (y^{-1} \circ D \circ y)}_{k \text{ times}} = y^{-1} \circ D^k \circ y.
>    $$
>    Applying $(D + x)^k$ to the unit element $1 \in K$:
>    $$
>    (D + x)^k(1) = y^{-1} D^k(y \cdot 1) = y^{-1} D^k(y).
>    $$
> 
> 3. **Equivalence of kernel conditions**:
>    Since $y \neq 0$, the scalar factor $y^{-1} \in K^\times$ is invertible.
>    Therefore, for any integer $k \ge 0$:
>    $$
>    (D + x)^k(1) = 0 \iff y^{-1} D^k(y) = 0 \iff D^k(y) = 0 \iff y \in \operatorname{Ker} D^k = P_k.
>    $$
> 
>    Setting $k = n$ and $k = n - 1$:
>    $$
>    \begin{aligned}
>    (D + x)^n(1) = 0 &\iff y \in P_n, \\
>    (D + x)^{n-1}(1) \neq 0 &\iff y \notin P_{n-1}.
>    \end{aligned}
>    $$
>    Thus, $y \in P_n \setminus P_{n-1}$ if and only if $(D + x)^n(1) = 0$ and $(D + x)^{n-1}(1) \neq 0$.
> 
> 4. **Converse: construct the required element**:
>    Conversely, start only with $T^n(1)=0$ and $T^{n-1}(1)\ne0$, where $T=D+x$. Put $z=T^{n-1}(1)\ne0$. Then $Tz=0$, hence $Dz+xz=0$. Therefore, for $y=z^{-1}$,
>    $$
>    \frac{Dy}{y}=-\frac{Dz}{z}=x.
>    $$
>    The already proved identity $T^j(1)=y^{-1}D^j(y)$ now gives $D^n(y)=0$ and $D^{n-1}(y)\ne0$. Thus $y\in P_n\setminus P_{n-1}$, including the case $n=1$, where $P_0=\ker D^0=\{0\}$. This proves the missing direction without assuming the existence of $y$ in advance.
>
> ---
> 
> ### Part (b): Descent of Logarithmic Derivatives from $K$ to $F$
> 
> Let $F$ be a subfield of $K$ such that $D(F) \subset F$.
> Let $x \in F$.
> 
> 1. **Trivial direction**:
>    If $x$ is a logarithmic derivative in $F$, then there exists $u \in F^\times \subset K^\times$ such that $x = Du/u$.
>    Then $x$ is immediately a logarithmic derivative in $K$.
> 
> 2. **Nontrivial direction**:
>    Conversely, assume $x \in F$ and $x$ is a logarithmic derivative in $K$:
>    there exists $y \in K^\times$ such that $x = Dy/y$.
>    
>    By the hypothesis $K = \bigcup_{n \ge 1} P_n$, the element $y$ belongs to some $P_n$.
>    Let $n \ge 1$ be the **minimal** integer such that $y \in P_n$.
>    Then $y \in P_n$ but $y \notin P_{n-1}$ (where $P_0 = \{0\}$).
>    
>    By Part (a), we have:
>    $$
>    (D + x)^n(1) = 0 \quad \text{and} \quad (D + x)^{n-1}(1) \neq 0.
>    $$
> 
> 3. **Location of the element in $F$**:
>    Consider the element
>    $$
>    z = (D + x)^{n-1}(1) \in K.
>    $$
>    - The base element is $1 \in F$.
>    - Since $x \in F$ and $D(F) \subset F$, the operator $(D + x)$ maps $F$ into $F$:
>      for any $f \in F$, $(D + x)(f) = D(f) + xf \in F$.
>    - Since $1 \in F$, applying $(D + x)$ iteratively $n - 1$ times stays within $F$:
>      $$
>      z = (D + x)^{n-1}(1) \in F.
>      $$
>    - By Part (a), $z \neq 0$, so $z \in F^\times$.
> 
> 4. **Extracting the logarithmic derivative**:
>    Now apply $(D + x)$ to $z$:
>    $$
>    (D + x)(z) = (D + x)\big((D + x)^{n-1}(1)\big) = (D + x)^n(1) = 0.
>    $$
>    Writing this out explicitly:
>    $$
>    D(z) + xz = 0 \implies xz = -D(z) \implies x = -\frac{D(z)}{z}.
>    $$
>    Now consider the element $u = z^{-1} \in F^\times$.
>    By the quotient rule for derivations:
>    $$
>    D(u) = D(z^{-1}) = -z^{-2} D(z).
>    $$
>    Dividing by $u = z^{-1}$:
>    $$
>    \frac{D(u)}{u} = \frac{-z^{-2} D(z)}{z^{-1}} = -\frac{D(z)}{z} = x.
>    $$
>    Since $z \in F^\times$, $u = z^{-1}$ also belongs to $F^\times$.
>    Therefore, $x = Du/u$ with $u \in F$, which proves that $x$ is a logarithmic derivative in $F$.

## Related Concepts

- [[03 - Field Theory/Concepts/Derivations and Differentials on Fields|Derivations and Differentials on Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Linear Transformations#Kernel and Image|Kernel and Image]]

## Notes

- **Source and proof status**: [S2, Ch. VIII, Exercise 8, printed p. 375, PDF p. 390]. Both directions in (a), and (b) under its implicit assumption $x\in F$, are independently proved here.
- **Local nilpotence**: The hypothesis $K=\bigcup_{n\ge1}P_n$ means that every element is killed by some iterate of $D$. For $K=k(t)$ in characteristic $p>0$ and $D=d/dt$, it holds because $D$ is $k(t^p)$-linear and $1,t,\ldots,t^{p-1}$ form a basis, on which $D^p=0$. No assertion about arbitrary higher derivations is needed.
- **Operator notation**: In $D+x$, the symbol $x$ denotes multiplication by $x$; in $y^{-1}\circ D\circ y$, the outer symbols likewise denote multiplication operators.
