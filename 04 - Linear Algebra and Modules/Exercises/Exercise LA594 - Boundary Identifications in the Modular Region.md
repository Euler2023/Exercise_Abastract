---
title: "Exercise LA594: Boundary Identifications in the Modular Region"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.3, Exercise 2.3.1, printed p. 56, PDF p. 71; Lemma 2.3.2, printed p. 53, PDF p. 68"
source_refs:
  - "S7/ch-2/sec-3/ex-1"
created: 2026-10-28
---

# Exercise LA594: Boundary Identifications in the Modular Region

## Problem Statement

> [!question] Original Exercise 2.3.1
> Fill in any details as necessary in the proof of Lemma 2.3.2.
>
> **Referenced Lemma 2.3.2, printed p. 53 / PDF p. 68.** Put
> $$
> \mathcal H=\{z\in\mathbb C:\operatorname{Im}z>0\},
> \qquad
> \mathcal D=\{z\in\mathcal H:|\operatorname{Re}z|\le1/2,\ |z|\ge1\}.
> $$
> Suppose $\tau_1$ and $\tau_2$ are distinct points in $\mathcal D$ and $\tau_2=\gamma\tau_1$ for some $\gamma\in SL_2(\mathbb Z)$, acting by fractional linear transformations. Then either
>
> (1) $\operatorname{Re}(\tau_1)=\pm1/2$ and $\tau_2=\tau_1\mp1$, or
>
> (2) $|\tau_1|=1$ and $\tau_2=-1/\tau_1$.

## Hints

> [!hint]- Hint 1
> Exchange the points if necessary so that $\operatorname{Im}\tau_2\ge\operatorname{Im}\tau_1$. Use $\operatorname{Im}(\gamma z)=\operatorname{Im}z/|cz+d|^2$ and $\operatorname{Im}\tau_1\ge\sqrt3/2$ to bound the integer $c$.

> [!hint]- Hint 2
> The transformation does not change when the matrix is multiplied by $-1$. Normalize $c=1$ when $c\ne0$, and show that $d\in\{-1,0,1\}$. The cases $d=\pm1$ force both points to be corners of $\mathcal D$.

> [!hint]- Hint 3
> If $c=1,d=0$, then $b=-1$ and $\tau_2=a-1/\tau_1$. First show $|\tau_1|=1$, and then use the strip bounds to exclude the integers $a=\pm1$ unless the two points coincide.

## Solution

> [!success]- Solution
> **Proof scope:** An independent completion of the source proof sketch, using only the determinant and the imaginary-part formula.
>
> Write $\tau_1=x+iy$ and $\tau_2=x_2+iy_2$. Membership in $\mathcal D$ gives
> $$
> |x|\le\frac12,\qquad
> y^2=|\tau_1|^2-x^2\ge\frac34.
> $$
> Both alternatives in the lemma are symmetric in the two distinct points: reversing a translation changes its sign, and the inversion $z\mapsto-1/z$ is an involution. We may therefore exchange the points and replace $\gamma$ by its inverse so that $y_2\ge y$.
>
> For $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, multiplying numerator and denominator of $(a\tau_1+b)/(c\tau_1+d)$ by $c\overline{\tau_1}+d$ gives
> $$
> y_2=\frac{(ad-bc)y}{|c\tau_1+d|^2}
> =\frac{y}{|c\tau_1+d|^2}.
> $$
> Thus $|c\tau_1+d|\le1$, and
> $$
> |c|\frac{\sqrt3}{2}
> \le |c|y
> =|\operatorname{Im}(c\tau_1+d)|
> \le |c\tau_1+d|
> \le1.
> $$
> Since $c$ is an integer, $c=0,1$, or $-1$.
>
> **Case 1: $c=0$.** The determinant condition gives $a=d=\pm1$. Multiplying $\gamma$ by $-1$ if necessary, write it as $\begin{pmatrix}1&n\\0&1\end{pmatrix}$. Hence $\tau_2=\tau_1+n$. The bounds on the two real parts imply $|n|\le1$, and distinctness excludes $n=0$. If $n=1$, then $x=-1/2$ and $x_2=1/2$; if $n=-1$, the signs reverse. This is (1).
>
> For the remaining cases, normalize $c=1$ by changing the sign of the whole matrix. The inequality already obtained gives
> $$
> (x+d)^2+y^2\le1
> \quad\Longrightarrow\quad
> |x+d|\le\frac12.
> $$
> Together with $|x|\le1/2$, this shows $|d|\le1$. Thus only $d=-1,0,1$ remain.
>
> **Case 2: $|c|=1$ and $|d|=1$.** When $d=\pm1$,
> $$
> 1\ge(x+d)^2+y^2
> \ge\frac14+\frac34=1.
> $$
> Equality forces $x=-d/2$, $y=\sqrt3/2$, and $|\tau_1+d|=1$, so $y_2=y$. Now $\tau_2\in\mathcal D$ yields
> $$
> x_2^2+y^2\ge1,\qquad |x_2|\le1/2,
> $$
> forcing $x_2=\pm1/2$. Distinctness gives $x_2=-x$. Therefore $\tau_1,\tau_2$ are the two corners $-1/2+i\sqrt3/2$ and $1/2+i\sqrt3/2$. They differ by the required translation, and because $|\tau_1|=1$,
> $$
> -\frac1{\tau_1}=-\overline{\tau_1}=-x+iy=\tau_2.
> $$
> Both alternatives hold in this case.
>
> **Case 3: $|c|=1$ and $d=0$.** With the normalization $c=1$, the equality $-b=ad-bc=1$ makes the matrix $\begin{pmatrix}a&-1\\1&0\end{pmatrix}$, and
> $$
> |\tau_1|\le1,\qquad
> \tau_2=a-\frac1{\tau_1}.
> $$
> Membership in $\mathcal D$ gives $|\tau_1|\ge1$, hence $|\tau_1|=1$ and
> $$
> \tau_2=a-\overline{\tau_1}=(a-x)+iy.
> $$
> Consequently $a=x+x_2$ is an integer in $[-1,1]$. If $a=1$, both $x$ and $x_2$ must be $1/2$; if $a=-1$, both must be $-1/2$. Since their imaginary parts are equal, either possibility makes $\tau_1=\tau_2$, contrary to the hypothesis. Thus $a=0$ and $\tau_2=-1/\tau_1$, proving (2).
>
> These cases exhaust all possible matrices and prove the lemma.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The original exercise and the full statement and sketch of Lemma 2.3.2 were checked on the rendered source pages cited above. The exercise assigns the omitted details; the argument here supplies them independently.
- **Method boundary:** The proof concerns boundary identifications of the closed region $\mathcal D$. It does not assert that the quotient map is injective on its boundary.
- **Routing:** Integer entries, the determinant, and explicit fractional linear calculations do the work, so the note belongs to Linear Algebra and Modules.
- **Figures:** No source figure is required for the statement or the proof; the region is specified by inequalities.
- **Learning status:** Adding this derivation leaves the status not-started.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
