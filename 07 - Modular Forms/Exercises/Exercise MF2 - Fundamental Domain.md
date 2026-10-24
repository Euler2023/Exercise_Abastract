---
title: "Exercise MF2: Elliptic Points and Their Stabilizers"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 2, Section 2.3, Exercise 2.3.5, printed p. 56, PDF p. 71; Corollary 2.3.4, printed p. 55, PDF p. 70; Appendix A hint, printed p. 415, PDF p. 426"
source_refs:
  - "S7/ch-2/sec-3/ex-5"
created: 2026-01-19
---

# Exercise MF2: Elliptic Points and Their Stabilizers

## Problem Statement

> [!question] Original Exercise 2.3.5
> **Original Exercise 2.3.5.**
>
> (a) Complete the proof of Corollary 2.3.4. (A hint for this exercise is at the end of the book.)
>
> (b) Give a more conceptual proof of the fourth statement in Corollary 2.3.4 as follows: The results from Exercise 2.1.3(c), that the isotropy subgroup of $i$ in $SL_2(\mathbb R)$ is $SO_2(\mathbb R)$ and that $\mathcal H\cong SL_2(\mathbb R)/SO_2(\mathbb R)$, show that an element $s(\tau)$ of $SL_2(\mathbb R)$ moves $\tau$ to $i$ and the isotropy subgroup of $\tau$ correspondingly conjugates to a discrete subgroup of $SO_2(\mathbb R)$. But since $SO_2(\mathbb R)$ is the rotations of the circle, any such subgroup is cyclic.
>
> **Referenced Corollary 2.3.4 — all four conclusions.** Let $\mu_3=e^{2\pi i/3}$. The elliptic points for $SL_2(\mathbb Z)$ are $SL_2(\mathbb Z)i$ and $SL_2(\mathbb Z)\mu_3$. The modular curve $Y(1)=SL_2(\mathbb Z)\backslash\mathcal H$ has two elliptic points. The isotropy subgroups of $i$ and $\mu_3$ are
> $$
> SL_2(\mathbb Z)_i=\left\langle\begin{pmatrix}0&-1\\1&0\end{pmatrix}\right\rangle,
> \qquad
> SL_2(\mathbb Z)_{\mu_3}=\left\langle\begin{pmatrix}0&-1\\1&1\end{pmatrix}\right\rangle.
> $$
> For each elliptic point $\tau$ of $SL_2(\mathbb Z)$ the isotropy subgroup $SL_2(\mathbb Z)_\tau$ is finite cyclic.
>
> Exercise 2.3.5 is on printed p. 56 / PDF p. 71; Corollary 2.3.4 is on printed p. 55 / PDF p. 70 in Fred Diamond and Jerry Shurman, *A First Course in Modular Forms*, corrected fourth printing 2016. Part (b) above preserves the printed direction of $s(\tau)$; see the visible Source issue before the solution.

> [!warning] Source issue
> **Source issue — direction of $s(\tau)$ in part (b).** Exercise 2.3.5(b) says that the previously defined $s(\tau)$ moves $\tau$ to $i$ (printed p. 56 / PDF p. 71). In Exercise 2.1.3(c), however,
> $$
> s(\tau)=\frac1{\sqrt y}\begin{pmatrix}y&x\\0&1\end{pmatrix},\qquad \tau=x+iy,
> $$
> is explicitly defined to satisfy $s(\tau)i=\tau$ (printed p. 47 / PDF p. 62). Thus the element moving $\tau$ to $i$ is $s(\tau)^{-1}$, and the correct conjugated stabilizer is $s(\tau)^{-1}G_\tau s(\tau)\subset SO_2(\mathbb R)$. The statement above preserves the printed wording; the solution uses this corrected direction.

## Hints

> [!hint]- Hint 1
> (a) Move an arbitrary elliptic point into $\mathcal D=\{z\in\mathcal H:|\operatorname{Re}z|\le1/2,\ |z|\ge1\}$. If an integral matrix fixes $z$, then $|cz+d|=1$; combine this with $\operatorname{Im}z\ge\sqrt3/2$ to restrict $c,d$.

> [!hint]- Hint 2
> (a) Solve directly for matrices fixing $i$ and $\mu_3$. The original appendix hint states that matrices fixing $\mu_3$ have the form $\begin{pmatrix}a&b\\-b&a-b\end{pmatrix}$, with $(2a-b)^2+3b^2=4$. Source: Fred Diamond and Jerry Shurman, *A First Course in Modular Forms*, Appendix A, printed p. 415 / PDF p. 426.

> [!hint]- Hint 3
> (b) Check first that $s(\tau)i=\tau$, so the element sending $\tau$ to $i$ is $s(\tau)^{-1}$. After conjugating the stabilizer, show that a discrete subgroup of the rotation group cannot contain nonidentity rotations arbitrarily close to the identity. Use its smallest positive rotation angle to prove cyclicity.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> We prove all of (a) and (b), distinguishing the input proved in the text from the independent deductions below. Write
> $$
> G=SL_2(\mathbb Z),\quad \rho=\mu_3=-\frac12+\frac{\sqrt3}{2}i,
> \quad S=\begin{pmatrix}0&-1\\1&0\end{pmatrix},
> \quad T=\begin{pmatrix}1&1\\0&1\end{pmatrix},\quad R=ST.
> $$
> An elliptic point is a point of the upper half-plane fixed by a nonidentity fractional linear transformation. In $G$, the matrices $\pm I$ both induce the identity and must be excluded.
>
> **(a1) Classifying all elliptic points.** The only fundamental-domain input is Lemma 2.3.1: every $G$-orbit meets the set
> $$
> \mathcal D=\left\{z\in\mathcal H:|\operatorname{Re}z|\le\frac12,\ |z|\ge1\right\}
> $$
> The lemma and the proof that its reduction algorithm terminates appear in Fred Diamond and Jerry Shurman, *A First Course in Modular Forms*, Section 2.3, printed p. 53 / PDF p. 68.
>
> Suppose $z=x+iy\in\mathcal D$ is fixed by $\delta=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in G\setminus\{\pm I\}$. If $c=0$, the imaginary part of the fixed-point equation $(d-a)z=b$ gives $d=a$, and its real part gives $b=0$. The determinant condition would then force $\delta=\pm I$, a contradiction. Thus $c\ne0$.
>
> For a real matrix of determinant $1$, direct computation gives
> $$
> \operatorname{Im}\frac{az+b}{cz+d}
> =\frac{\operatorname{Im}((az+b)(c\bar z+d))}{|cz+d|^2}
> =\frac{(ad-bc)y}{|cz+d|^2}
> =\frac y{|cz+d|^2}.
> $$
> Since $\delta z=z$, we have $|cz+d|=1$. Moreover, $z\in\mathcal D$ implies $y^2\ge1-x^2\ge3/4$, so
> $$
> |c|\frac{\sqrt3}{2}\le |c|y\le |cz+d|=1.
> $$
> Therefore, since $c\ne0$, its only possible values are $\pm1$. Replacing $\delta$ by $-\delta$ if necessary does not change the transformation, so we may take $c=1$. It follows that $|z+d|=1$.
>
> If $|d|\ge2$, then $|z+d|\ge|x+d|\ge3/2$, a contradiction. If $d=\pm1$, then
> $$
> 1=|z+d|^2=|z|^2+2dx+1\ge1-1+1=1.
> $$
> Equality forces $|z|=1$ and $dx=-1/2$, so $z=\rho$ or $z=\rho+1$. If $d=0$, then $|z|=1$. The imaginary part of the fixed-point equation gives $a-d=2cx$, hence $a=2x$. Because $a\in\mathbb Z$ and $|x|\le1/2$, we must have $x=-1/2,0,1/2$; the corresponding $z$ is again one of $\rho,i,\rho+1$.
>
> Any elliptic point $\tau$ can be moved into $\mathcal D$ by some $h\in G$; its nontrivial fixing transformation is simultaneously conjugated to $h\gamma h^{-1}$, so the preceding classification applies. Since $T\rho=\rho+1$, all elliptic points lie in at most the two orbits $Gi$ and $G\rho$. Conversely, $S(i)=i$, and
> $$
> R(\rho)=-\frac1{\rho+1}=\rho
> $$
> by $\rho^2+\rho+1=0$. Their conjugates fix the points in $Gi$ and $G\rho$, respectively. Thus the elliptic points are exactly $Gi\cup G\rho$, proving the first conclusion.
>
> **(a2) The two orbits are distinct.** For every $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in G$,
> $$
> \operatorname{Im}(\gamma i)=\frac1{c^2+d^2}\in\mathbb Q.
> $$
> In contrast, $\operatorname{Im}\rho=\sqrt3/2\notin\mathbb Q$, so $\gamma i\ne\rho$. Hence $Y(1)$ has exactly two elliptic points, proving the second conclusion.
>
> **(a3) Computing the full stabilizers.** The equation $\gamma i=i$ gives $d=a$ and $c=-b$; the condition $\det\gamma=1$ then gives $a^2+b^2=1$. Its only integer solutions are $(a,b)=(\pm1,0),(0,\pm1)$, so
> $$
> G_i=\{I,S,-I,-S\}=\langle S\rangle,\qquad S^2=-I.
> $$
> The equation $\gamma\rho=\rho$ is equivalent to
> $$
> c\rho^2+(d-a)\rho-b=0.
> $$
> Substituting $\rho^2=-\rho-1$ and comparing real coefficients gives $c=-b$ and $d=a-b$. Therefore
> $$
> \gamma=\begin{pmatrix}a&b\\-b&a-b\end{pmatrix},
> \qquad a^2-ab+b^2=1,
> \qquad (2a-b)^2+3b^2=4.
> $$
> The last equation implies $|b|\le1$. If $b=0$, then $a=\pm1$; if $b=1$, then $a=0,1$; and if $b=-1$, then $a=0,-1$. These six matrices are precisely the six powers of $R$, since
> $$
> R=\begin{pmatrix}0&-1\\1&1\end{pmatrix},\qquad
> R^2=\begin{pmatrix}-1&-1\\1&0\end{pmatrix},\qquad R^3=-I,
> $$
> and the other three powers are $I,-R,-R^2$. Thus $G_\rho=\langle R\rangle$, of order $6$. This proves the third conclusion.
>
> **(a4) Every elliptic stabilizer is finite cyclic.** If $\tau=h i$, then
> $$
> G_\tau=hG_i h^{-1}=\langle hSh^{-1}\rangle;
> $$
> If $\tau=h\rho$, then $G_\tau=hG_\rho h^{-1}=\langle hRh^{-1}\rangle$. By (a1), every elliptic stabilizer is therefore a finite cyclic group of order $4$ or $6$. This proves the fourth conclusion.
>
> **(b) A conceptual proof using rotations.** We also prove the stabilizer facts needed from Exercise 2.1.3(c), rather than treating that unsolved exercise as a proved input. The exercise and the definition of $s(\tau)$ appear in Fred Diamond and Jerry Shurman, *A First Course in Modular Forms*, printed p. 47 / PDF p. 62.
>
> For $\tau=x+iy\in\mathcal H$, take
> $$
> s(\tau)=\frac1{\sqrt y}\begin{pmatrix}y&x\\0&1\end{pmatrix}.
> $$
> Direct calculation gives $\det s(\tau)=1$ and $s(\tau)i=\tau$, hence $s(\tau)^{-1}\tau=i$. A real matrix $\begin{pmatrix}u&v\\w&t\end{pmatrix}\in SL_2(\mathbb R)$ fixes $i$ if and only if $t=u$, $w=-v$, and $u^2+v^2=1$. Thus the stabilizer of $i$ in the real group is exactly $SO_2(\mathbb R)$. This also shows that $SL_2(\mathbb R)$ acts transitively on $\mathcal H$, and the orbit map induces the required coset identification $SL_2(\mathbb R)/SO_2(\mathbb R)\cong\mathcal H$.
>
> Consequently,
> $$
> H_\tau=s(\tau)^{-1}G_\tau s(\tau)\subset SO_2(\mathbb R).
> $$
> The integer matrix group $G$ is discrete in real matrix space: the neighborhood in which every entry differs by less than $1/2$ from the corresponding entry of a given integer matrix contains no other integer matrix. Conjugation is a homeomorphism, so $H_\tau$ is also a discrete subgroup.
>
> We now prove that a discrete rotation subgroup $H\subset SO_2(\mathbb R)$ is finite cyclic. Since the identity is isolated in $H$, there is $\varepsilon>0$ such that no rotation through an angle satisfying $0<|\theta|<\varepsilon$ belongs to $H$. Partition the circle into finitely many half-open arcs of length less than $\varepsilon$. If $H$ were infinite, two distinct rotation angles would lie in the same arc; their quotient would be an element of $H$ with an angle of absolute value strictly between $0$ and $\varepsilon$, a contradiction. Thus $H$ is finite.
>
> If $H=\{I\}$, it is already cyclic. Otherwise, choose its smallest positive rotation angle $\theta_0\in(0,2\pi)$. For any rotation in $H$, represent its angle by $\phi\in[0,2\pi)$ and write $\phi=q\theta_0+r$, where $0\le r<\theta_0$. The corresponding quotient rotation is still in $H$, so minimality forces $r=0$. Hence $H$ is generated by the rotation through $\theta_0$. Therefore $H_\tau$ is finite cyclic, as is its conjugate $G_\tau$. This proves the required fourth conclusion and also applies to stabilizers of nonelliptic points.

## Related Concepts

- [[07 - Modular Forms/Concepts/Fundamental Domain|Fundamental Domain]]
- [[07 - Modular Forms/Concepts/Modular Group|Modular Group]]
- [[01 - Group Theory/Concepts/Group Actions|Group Actions]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Topology of Matrix Groups|Topology of Matrix Groups]]

## Notes

- **Source status:** Both parts (a) and (b) were transcribed from Fred Diamond and Jerry Shurman, *A First Course in Modular Forms*, corrected fourth printing 2016, Exercise 2.3.5, printed p. 56 / PDF p. 71. All four conclusions of the referenced Corollary 2.3.4 are included, printed p. 55 / PDF p. 70. The appendix hint for (a) was checked on printed p. 415 / PDF p. 426.
- **Proof status:** The solution is independently derived. Only Lemma 2.3.1, proved in the text, is used for fundamental-domain reduction. The proof does not rely on the classification arguments in Proposition 2.3.3 that are assigned in Exercise 2.3.4. Part (b) proves the rotation stabilizer, discreteness, finiteness, and cyclicity explicitly.
- **Notation:** The stabilizers in $SL_2(\mathbb Z)$ have order $4$ at $i$ and order $6$ at $\rho$. After quotienting by the trivially acting subgroup $\{\pm I\}$, the stabilizers in $PSL_2(\mathbb Z)$ have orders $2$ and $3$, respectively.
- **Archive identity:** This note corresponds exactly to the complete original Exercise 2.3.5(a),(b).
- **Figures:** Neither the exercise nor this proof depends on a specified source figure.
- **Learning status:** The status remains `not-started`; a complete solution does not change learning progress.

- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]]. This note records the single source exercise identified above.
